const express = require("express");
const movie = require("../models/movie");
const movieSchema = require("../models/movie");

const router =  express.Router();

// create movie
router.post("/movie", (req, res) => {
    const movie = movieSchema(req.body);
    movie
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET all movies
router.get('/movie', (req, res) => {
    movie
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// get by id
router.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    movie.findOne( { movieId: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  movie

// delete movie


module.exports = router;