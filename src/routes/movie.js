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
    movie.
    findOne( { movie_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  movie
router.put('/movie/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} =req.body;
    movieSchema
    .updateOne ({ movie_id: id }, { $set: { mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete movie
router.delete('/movie/:id', (req, res) => {
    const { id } = req.params;
    movieSchema
    .deleteOne({ movie_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;