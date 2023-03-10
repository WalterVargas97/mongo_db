const mongoose = require('mongoose');

const ratingSchema =  mongoose.Schema({
    mov_id:{
    type: Number,
    required: true,
    },
    rev_id: {
    type: Number,
    required: true
    },
    rev_stars: {
    type: Number,
    required: true
    },
    num_o_ratings: {
    type: Number,
    required: true
    }
});

module.exports = mongoose.model('Rating', ratingSchema);
