const express = require("express");
const rating = require("../models/rating");
const ratingSchema = require("../models/rating");

const router =  express.Router();

// create rating
router.post("/rating", (req, res) => {
    const rating = ratingSchema(req.body);
    rating
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET all ratings
router.get('/rating', (req, res) => {
    rating
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// get by id
router.get('/rating/:id', (req, res) => {
    const { id } = req.params;
    rating.
    findOne( { rating_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  rating
router.put('/rating/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, rev_id, rev_stars, num_o_ratings } =req.body;
    ratingSchema
    .updateOne ({ rating_id: id }, { $set: { mov_id, rev_id, rev_stars, num_o_ratings }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete rating
router.delete('/rating/:id', (req, res) => {
    const { id } = req.params;
    ratingSchema
    .deleteOne({ rating_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;