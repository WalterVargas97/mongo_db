const { default: mongoose } = require("mongoose");

const movieDirectionSchema = mongoose.Schema({
  dir_id: {
    type: Number,
    required: true,
  },
  mov_id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('MovieDirection', movieDirectionSchema);
