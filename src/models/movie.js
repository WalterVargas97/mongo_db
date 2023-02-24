const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        
    },
    age: {
        type: Number,
        required: true
    },
    email: {
    type: String,
    required: true,

    },
    
    /* id : {
    type: Number,
    require: true,    
    },
    title: {
        Type : String,
        required: true,
        unique: true,
        trim: true
    },
    year: {
    type: Number,
    require: true,    
    },
    time: {
        type: Number,
        require: true,    
    },

    lang: {
        Type : String,
        required: true,
    },
    dt_rel: {
        type: Number,
        require: true,    
        },
    rel_country: {
        Type : String,
        required: true,
    }, */

});

module.exports = mongoose.model('Movie', movieSchema);