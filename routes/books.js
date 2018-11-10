const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

router.get("/", (req, res) => {
  Book.find({}).then(books => {
    res.status(200).json(books);
  });
});

router.get("/:id", (req, res) => {
  Book.find({ _id: req.params.id }).then(book => {
    res.status(200).json(book);
  });
});

router.post("/", (req, res) => {
  let book = new Book({
    title: req.body.title,
    author: req.body.author,
    numPages: req.body.numPages
  });

  book.save().then(book => res.status(200).json(book));
});

router.put("/:id", (req, res) => {
  Book.findOne({ _id: req.params.id }).then(book => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.numPages = req.body.numPages;

    book.save().then(book => {
      console.log(book);
      res.status(200).json(book);
    });
  });
});

router.delete("/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({ msg: "Deletion successful" });
  });
});

module.exports = router;
