const mongoose = require('mongoose');

const moviegenresSchema =  mongoose.Schema({
    mov_id:{
    type: Number,
    required: true
    },
    gen_id: {
    type: Number,
    required: true
    }
});

module.exports = mongoose.model('Moviegenres', moviegenresSchema);