const db = require("../config/db");

function getAllComments(callback) {
  db.query("SELECT * FROM comments ORDER BY id DESC", callback);
}

function createComment(commentData, callback) {
  const { username, email, comment } = commentData;

  db.query(
    "INSERT INTO comments (username, email, comment) VALUES (?, ?, ?)",
    [username, email, comment],
    callback,
  );
}

module.exports = {
  getAllComments,
  createComment,
};
