const mongoose = require('mongoose');

const reviewersSchema = mongoose.createSchema({
    rev_id:{
        type: Number,
        required: true
    },
    rev_name:{
        type: String,
        required: true
    }
});

module.exports.model('Reviewer', reviewersSchema);