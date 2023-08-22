// MODELS
// REQUIRING THE MONGOOSE FRAMEWORK
const mongoose = require("mongoose");

// STRUCTURE OF THE DOCUMENT / DATA TO BE STORED
const todoSchema = new mongoose.Schema({
  // DESCRIPTION OF TASK
  description: {
    type: String,
    required: true,
  },
  // CATEGORY OF TASK
  category: {
    type: String,
    required: false,
  },
  // DUE DATE OF TASK
  dueDate: {
    type: Date,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
