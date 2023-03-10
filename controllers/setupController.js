var Todos = require("../models/todoModel");

module.exports = function (app) {
  app.get("/api/setupTodos", function (req, res) {
    // seed database:
    var starterTodos = [
      {
        username: "qmeng222",
        todo: "Buy milk",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "qmeng222",
        todo: "Feed dog",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "qmeng222",
        todo: "Learn Node",
        isDone: false,
        hasAttachment: false,
      },
    ];

    Todos.create(starterTodos).then(function (results) {
      res.send(results);
    });
  });
};
