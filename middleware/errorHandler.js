function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).render("pages/500", {
    errorMessage: err.message || "Something went wrong.",
  });
}

module.exports = errorHandler;
