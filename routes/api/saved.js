const router = require("express").Router();
const db = require("../../models");

// const booksController = require("../../controllers/booksController");

// Matches with "/api/saved"
router
  .route("/")
  // query MongoDB for all saved articles
  .get((req, res) => {
    db.Article
      .find({})
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  })
  // save an article to the database
  .post((req, res) => {
    db.Article.create(req.body).then(() => {
      res.json(req.body);
    });
  })
  .delete();

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
