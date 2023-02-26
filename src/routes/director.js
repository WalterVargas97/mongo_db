const express = require("express");
const director = require("../models/director");
const directorSchema = require("../models/director");

const router =  express.Router();

//  crear
router.post("/director", (req, res) => {
    const director = directorSchema(req.body)
    director
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// obtener
router.get("/director", (req, res) => {
    director
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener director por id
router.get("/director/:id", (req, res) => {
    const { id } = req.params;
    director
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update - actualizar 
router.put("/director/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, dir_fname, dir_lname } = req.body;
    directorSchema
    .updateOne({ dir_id: id}, { $set: { dir_id, dir_fname, dir_lname }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });

//  delete - eliminar
router.delete("/director/:id", (req, res) => {
    const { id } = req.params;
    directorSchema
      .deleteOne({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;