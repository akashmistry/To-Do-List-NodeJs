// GETTING THE MODEL
const Todo = require("../models/todo");

// HOME CONTROLLER
//
module.exports.home = function (req, res) {
  Todo.find({})
    .then((tasks) => {
      return res.render("home", {
        title: "Todo List ",
        todo_list: tasks,
      });
    })
    .catch((err) => {
      console.log("Error in fetching the data from database: ", err);
    });
};

module.exports.add = function (req, res) {
  Todo.create(req.body)
    .then((todo) => {
      console.log(todo);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in add the List", err);
    });
};
