const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    actor_id: {
        type: Number,
        required: true
    },
    act_fname: {
        type: String,
        required: true
    },
    act_lname: {
        type: String,
        required: true
    },
    act_gender: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Actor", actorSchema);