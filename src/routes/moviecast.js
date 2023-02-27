const express = require("express");
const moviecast = require("../models/moviecast");
const moviecastSchema = require("../models/moviecast");

const router =  express.Router();

// create moviecast
router.post("/moviecast", (req, res) => {
    const moviecast = moviecastSchema(req.body);
    moviecast
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET all moviecasts
router.get('/moviecast', (req, res) => {
    moviecast
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// get by id
router.get('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    moviecast.
    findOne( { moviecast_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  moviecast
router.put('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, mov_id, role} =req.body;
    moviecastSchema
    .updateOne ({ moviecast_id: id }, { $set: { act_id, mov_id, role }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete moviecast
router.delete('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    moviecastSchema
    .deleteOne({ moviecast_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;