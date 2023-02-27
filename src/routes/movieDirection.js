const express = require("express");
const movieDirection = require("../models/movieDirection");
const movieDirectionSchema = require("../models/movieDirection");

const router =  express.Router();

//  crear movieDirection
router.post("/movieDirection", (req, res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// obtener
router.get("/movieDirection", (req, res) => {
    movieDirection
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener movieDirection por id
router.get("/movieDirection/:id", (req, res) => {
    const { id } = req.params;
    movieDirection
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// update - actualizar
router.put("/movieDirection/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, mov_id } = req.body;
    movieDirectionSchema
    .updateOne({ dir_id: id }, {$set: {dir_id, mov_id}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  delete - eliminar
router.delete("/movieDirection/:id", (req, res) => {
    const { id } = req.params;
    movieDirectionSchema
      .deleteOne({ dir_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;
