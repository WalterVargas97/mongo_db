const express = require("express");
const moviegenres = require("../models/moviegenres");
const moviegenresSchema = require("../models/moviegenres");

const router =  express.Router();

// create moviegenres
router.post("/moviegenres", (req, res) => {
    const moviegenres = moviegenresSchema(req.body);
    moviegenres
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET all moviegenress
router.get('/moviegenres', (req, res) => {
    moviegenres
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// get by id
router.get('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    moviegenres.
    findOne( { moviegenres_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  moviegenres
router.put('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, gen_id } =req.body;
    moviegenresSchema
    .updateOne ({ moviegenres_id: id }, { $set: { mov_id, gen_id}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete moviegenres
router.delete('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    moviegenresSchema
    .deleteOne({ moviegenres_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;