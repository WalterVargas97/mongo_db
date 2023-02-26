const express = require('express');
const router = express.Router();

//  crear
router.post("/actor", (req, res) => {
    const actor = actorSchema(req.body)
    actor
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// obtener
router.get("/actor", (req, res) => {
    actorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener actor por id
router.get("/actor/:id", (req, res) => {
    const { id } = req.params;
    actorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update - actualizar 
router.put("/actor/:id", (req, res) => {
    const { id } = req.params;
    const {act_id, act_fname, act_lname, act_gender} = req.body;
    actorSchema
    .updateOne({act_id: id }, {$set: { act_id, act_fname, act_lname, act_gender }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  delete - eliminar
router.delete("/actor/:id", (req, res) => {
    const { id } = req.params;
    actorSchema
      .remove({ act_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;