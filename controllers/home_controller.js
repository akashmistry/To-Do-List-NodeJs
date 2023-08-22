// GETTING THE MODEL
const Todo = require("../models/todo");

// HOME CONTROLLER
// SHOW ALL THE TASKS
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

// ADD TASK CONTROLLER
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

// DELETE TASK CONTROLLER
module.exports.delete = function (req, res) {
  // EXTRACTING THE KEY
  let id = req.query;
  id = Object.keys(id);

  console.log("Deleting the task: ", id);
  Todo.findByIdAndDelete(id)
    .then(() => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("Error in deleteing the task: ", err);
    });
  // }
};
