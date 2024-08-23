// movieModel.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre' // هذا السطر يحدد أن الحقل genre يحتوي على مراجع لنوع Genre
  }]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
