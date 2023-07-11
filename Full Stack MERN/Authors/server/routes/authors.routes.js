const AuthorController = require("../controllers/authors.controller");

// this are event listeners
module.exports = function (app) {
  app.get("/", AuthorController.getAllAuthors);
  app.post("/new", AuthorController.createAuthor);
  app.get('/:id', AuthorController.getAuthor);
  app.put('/update/:id', AuthorController.updateAuthor);
  app.delete("/:id", AuthorController.deleteAuthor);
}