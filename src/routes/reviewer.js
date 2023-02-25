const express = require('express');
const reviewerSchema = require("../models/review");

const router = express.Router();

//creste reviewer
router.post("/reviewers", (req, res) => {
    const reviewer = reviewerSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener reviewers
router.get("/reviewers", (req, res) => {
    reviewerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//  obtener reviewer por id
router.get("/reviewers/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// actualizar
router.put("/reviewers/:id", (req, res) => {
    const { id } = req.params;
    const {rev_id, rev_name } = req.body;
    reviewerSchema
    .updateOne({rev_id: id }, {$set: {rev_id, rev_name}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// eliminar
router.delete("/reviewers/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
      .remove({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;