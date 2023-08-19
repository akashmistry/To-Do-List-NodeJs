// REQUIRING THE EXPRESS FRAMEWORK
const express = require("express");

const app = express();

const port = 2620;

// DATABASE CONNECTION USING MONGOOSE
const db = require("./config/mongoose");

// WILL BE USED TO CREATE TODO ENTRIES
const Todo = require("./models/todo");

// USING THE ROUTES
app.use("/", require("./routes"));

// SETTING VIEWS
app.set("view engine", "ejs");
app.set("views", "./views");

// FIRING SERVER
app.listen(port, function (err) {
  if (err) {
    console.log("Oops error in running the sever:", err);
    return;
  }
  console.log("🔥Firing up the Express server on: ", port, "🤙🏻");
});
