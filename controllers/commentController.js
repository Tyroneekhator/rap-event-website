const commentModel = require("../models/commentModel");

function getComments(req, res, next) {
  commentModel.getAllComments((error, results) => {
    if (error) {
      return next(error);
    }

    res.render("pages/comments", { comments: results });
  });
}

function postComment(req, res, next) {
  const { username, email, comment } = req.body;

  if (!username || !email || !comment) {
    return res.status(400).send("All fields are required.");
  }

  commentModel.createComment({ username, email, comment }, (error) => {
    if (error) {
      return next(error);
    }

    res.redirect("/comments");
  });
}

module.exports = {
  getComments,
  postComment,
};
