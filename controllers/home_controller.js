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

module.exports.delete = function (req, res) {
  //getting the id of selected boxes
  let id = req.query;
  console.log(id);

  //gives the length of the selected checkboxes
  let checkboxes = Object.keys(id).length;

  //iterating over each selected boxes
  for (let i = 0; i < checkboxes; i++) {
    // find the item in the database using id and delte it
    Todo.findByIdAndDelete(Object.keys(id)[i])
      .then(() => {
        return res.redirect("/");
      })
      .catch((err) => {
        console.log("Error in deleteing the task: ", err);
      });
  }
};
