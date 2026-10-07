const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("GET - get a random book");
  })
  .post((req, res) => {
    res.send("POST - Add a book");
  })
  .put((req, res) => {
    res.send("PUT - Update a book");
  });

module.exports = router;
