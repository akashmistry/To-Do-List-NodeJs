// REQUIRING THE FRAMEWORKS
const express = require("express");
const path = require("path");
const app = express();
const port = 2620;

// DATABASE CONNECTION USING MONGOOSE
const db = require("./config/mongoose");

// SETTING PATHS FOR VIEWS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// PATH FOR ASSETS
app.use(express.static(path.join(__dirname, "assets")));

// TO PUT AlL ENTERED VALUES IN BODY KEY
app.use(express.urlencoded({ extended: true }));

// ROUTES TO THE INDES ROUTE PAGE
app.use("/", require("./routes"));

// FIRING SERVER
app.listen(port, function (err) {
  if (err) {
    console.log("Oops error in running the sever:", err);
    return;
  }
  console.log("🔥Firing up the Express server on: ", port, "🤙🏻");
});
