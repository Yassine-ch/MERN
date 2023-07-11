const { response } = require("express");
const { Author } = require("../models/authors.model");


  // request.body is form body
  // const { name } = request.body;
  console.log("create method executed");

  module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newlyCreatedAuthor)=>{
        res.json({Author: newlyCreatedAuthor})
    })
    .catch((err)=>{
        res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.getAllAuthors = (request, response) => {
  console.log("get all authors method executed");

  Author.find()
    .then((authors) => response.json(authors))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAuthor = (request, response) => {
  console.log("get author method executed");

  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateAuthor = (request, response) => {
  console.log("update author method executed");

  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
  console.log("delete author method executed");

  Author.findOneAndDelete({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};