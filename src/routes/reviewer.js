const express = require("express");
const reviewer = require("../models/reviewer");
const reviewerSchema = require("../models/reviewer");

const router =  express.Router();

//  Create
router.post("/reviewer", (req, res) => {
    const reviewer = reviewerSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  Traer info
router.get("/reviewer", (req, res) => {
    reviewer
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  Traer info por id
router.get("/reviewer/:id", (req, res) => {
    const { id } = req.params;
    reviewer
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  Actualizar info
router.put("/reviewer/:id", (req, res) => {
    const { id } = req.params;
    const { rev_id, rev_name } = req.body;
    reviewerSchema
    .updateOne({ rev_id: id }, {$set: { rev_id, rev_name }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  Eliminar info reviwer
router.delete("/reviewer/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
      .deleteOne({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;
