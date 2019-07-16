const mongoose = require('mongoose');

// blue print of data
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

// create models of blue prints
module.exports = mongoose.model('Post', postSchema);
