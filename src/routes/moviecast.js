const express = require("express");
const moviecastSchema = require("../models/moviecast");

const router =  express.Router();

//Create a new movie_cast
router.post("/moviecasts",(req, res) => {
    const moviecast = moviecastSchema(req.body);
    moviecast
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});