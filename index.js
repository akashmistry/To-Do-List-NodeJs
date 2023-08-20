// REQUIRING THE EXPRESS FRAMEWORK
const express = require("express");
const app = express();
const port = 2620;
const path = require("path");

// DATABASE CONNECTION USING MONGOOSE
const db = require("./config/mongoose");

// WILL BE USED TO CREATE TODO ENTRIES
const Todo = require("./models/todo");

// SETTING VIEWS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// PATH FOR ASSETS
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

// USING THE ROUTES
app.use("/", require("./routes"));

// FIRING SERVER
app.listen(port, function (err) {
  if (err) {
    console.log("Oops error in running the sever:", err);
    return;
  }
  console.log("🔥Firing up the Express server on: ", port, "🤙🏻");
});
