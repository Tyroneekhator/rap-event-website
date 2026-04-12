const express = require("express");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "rapnation",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("MySQL is connected!");
});

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("pages/home", { pagetitle: "Line-up" });
});

app.get("/line", (req, res) => {
  res.render("pages/lineup");
});

app.get("/stages", (req, res) => {
  res.render("pages/stages");
});

app.get("/Advice", (req, res) => {
  res.render("pages/advice");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/form", (req, res) => {
  res.render("pages/form");
});

app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (error, results) => {
    if (error) {
      console.error("Failed to fetch comments:", error.message);
      return res.send("Error loading comments.");
    }

    res.render("pages/comments", { comments: results });
  });
});

app.post("/contact", (req, res) => {
  const { username, email, comment } = req.body;

  db.query(
    "INSERT INTO comments(username,email,comment) VALUES(?,?,?)",
    [username, email, comment],
    (error) => {
      if (error) {
        console.error("Failed to save comment:", error.message);
        return res.send("Error saving comment.");
      }

      res.redirect("/comments");
    },
  );
});

app.listen(9000, () => {
  console.log("server started!");
});
