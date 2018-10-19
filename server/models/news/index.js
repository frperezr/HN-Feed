// Node Modules
const mongoose = require('mongoose');

// Mongoose Schema
const hackerNewSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  created_at: String,
  story_title: String,
  author: String,
  story_url: String,
  show: Boolean,
});

// Export Schema
module.exports = mongoose.model('HackerNew', hackerNewSchema);
