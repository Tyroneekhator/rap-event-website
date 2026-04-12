const express = require("express");
const path = require("path");
require("dotenv").config();

const pageRoutes = require("./routes/pageRoutes");
const commentRoutes = require("./routes/commentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRoutes);
app.use("/", commentRoutes);

app.use((req, res) => {
  res.status(404).render("pages/404");
});

app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
