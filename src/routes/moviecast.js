const express = require("express");
const moviecastSchema = require("../models/moviecast");

const router =  express.Router();

//Create a new moviecast
router.post("/moviecast", (req, res) => {
    const movie = moviecastSchema(req.body);
    movie
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;