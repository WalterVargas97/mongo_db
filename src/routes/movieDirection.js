const express = require('express');
const router = express.Router();

//  crear 
router.post("/movieDirections", (req, res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener todos
router.get("/movieDirections", (req, res) => {
    movieDirectionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  traer director por id
router.get("/movieDirections/:id", (req, res) => {
    const { id } = req.params;
    movieDirectionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


//  actualizar o modificar
router.put("/movieDirections/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, mov_id } = req.body;
    movieDirectionSchema
    .updateOne({ dir_id: id }, {$set: {dir_id, mov_id}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  eliminar
router.delete("/movieDirections/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
      .remove({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;