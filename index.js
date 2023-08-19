// REQUIRING THE EXPRESS FRAMEWORK
const express = require("express");

const app = express();

const port = 2620;

// app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Oops error in running the sever:", err);
    return;
  }
  console.log("🔥Firing up the Express server on: ", port, "🤙🏻");
});
