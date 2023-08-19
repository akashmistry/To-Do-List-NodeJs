// REQUIRING THE MONGOOSE LIBRARY
const mongoose = require("mongoose");

// CONNECTION TO THE DATABASE
mongoose.connect("mongodb://localhost/todo_list");

// TO ACQUIRE THE CONNECTION (TO CHECK IF IT IS SUCCESSFUL)
const db = mongoose.connection;

// IF DATABASE HAS ERRORS
db.on("error", console.error.bind(console, "error connecting to DataBase"));

// IF DATABASE IS RUNNING SUCCESSFULLY
db.once("open", function () {
  console.log("Successfully connected to the DataBase 🥞");
});
