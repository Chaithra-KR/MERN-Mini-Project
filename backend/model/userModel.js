const mongoose = require('mongoose');

// Define the schema
const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the model
const User = mongoose.model('User', user);
module.exports = User;
