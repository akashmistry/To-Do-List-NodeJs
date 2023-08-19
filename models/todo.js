// MODELS
const mongoose = require("mongoose");

// STRUCTURE OF THE DOCUMENT / DATA TO BE STORED
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
