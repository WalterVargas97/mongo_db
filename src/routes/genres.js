const express = require("express");
const genres = require("../models/genres");
const genresSchema = require("../models/genres");

const router =  express.Router();

// create genres
router.post("/genres", (req, res) => {
    const genres = genresSchema(req.body);
    genres
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET all genress
router.get('/genres', (req, res) => {
    genres
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// get by id
router.get('/genres/:id', (req, res) => {
    const { id } = req.params;
    genres.
    findOne( { genres_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});

// put  genres
router.put('/genres/:id', (req, res) => {
    const { id } = req.params;
    const { gen_id, gen_title} =req.body;
    genresSchema
    .updateOne ({ genres_id: id }, { $set: { gen_id, gen_title }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete genres
router.delete('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
    .deleteOne({ genres_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;