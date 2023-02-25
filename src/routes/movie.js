const express = require("express");
const movieSchema = require("../models/movie");

const router =  express.Router();

// create movie
router.post("/movies", (req, res) => {
    const movie = movieSchema(req.body);
    movie
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;