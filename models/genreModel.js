const mongoose = require('mongoose');

// تعريف نموذج Genre
const genreSchema = new mongoose.Schema({
  name: String
});

const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
