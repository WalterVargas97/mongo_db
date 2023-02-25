const express = require('express');
const router = express.Router();

//  crear
router.post("/directors", (req, res) => {
    const director = directorSchema(req.body)
    director
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// obtener
router.get("/directors", (req, res) => {
    directorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener director por id
router.get("/directors/:id", (req, res) => {
    const { id } = req.params;
    directorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update - actualizar 
router.put("/diretors/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, dir_fname, dir_lname } = req.body;
    directorSchema
    .updateOne({ dir_id: id }, {$set: { dir_id, dir_fname, dir_lname }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  delete - eliminar
router.delete("/actors/:id", (req, res) => {
    const { id } = req.params;
    directorSchema
      .remove({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;