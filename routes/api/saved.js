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
      console.log(req.body);
      res.json(req.body);
    });
  });

// Matches with "/api/saved/:id"
router.route("/:id").delete((req, res) => {
  db.Article
    .findById({ _id: req.params.id })
    // .findById({ _id: req.body.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
