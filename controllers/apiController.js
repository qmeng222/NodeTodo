var Todos = require("../models/todoModel");
var bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  // parse URL-encoded data in requests:
  app.use(bodyParser.urlencoded({ extended: true }));

  // http://localhost:3000/api/todos/qmeng222
  http: app.get("/api/todos/:uname", async (req, res) => {
    try {
      const todos = await Todos.find({ username: req.params.uname });
      res.send(todos);
    } catch (err) {
      throw err;
    }
  });

  // http://localhost:3000/api/todo/640aedd5cf19528235096d6a
  app.get("/api/todo/:id", async (req, res) => {
    try {
      const todo = await Todos.findById({ _id: req.params.id });
      res.send(todo);
    } catch (err) {
      throw err;
    }
  });

  // POST:
  app.post("/api/todo", function (req, res) {
    // if there is an id in the req body, update that todo object:
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      })
        .then(function (todo) {
          res.send("Success");
        })
        .catch((err) => {
          throw err;
        });
    } else {
      // create a new todo:
      var newTodo = Todos({
        username: "qmeng222",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      newTodo
        .save()
        .then(() => {
          res.send("Success");
        })
        .catch((err) => {
          throw err;
        });
    }
  });

  // DELETE:
  app.delete("/api/todo", function (req, res) {
    Todos.findByIdAndRemove(req.body.id)
      .then(() => {
        res.send("Success");
      })
      .catch((err) => {
        throw err;
      });
  });
};
