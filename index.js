const express = require('express');
const mysql = require('mysql');

const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"rapnation"
});

db.connect(err=>{
    if(err) throw err;
    console.log("MySQL is connected!");
});

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.render("page1", {pagetitle:"Line-up"});
});

app.get("/line", (req,res)=>{
    res.render("page2");
});

app.get("/stages", (req,res)=>{
    res.render("page3");
});

app.get("/Advice", (req,res)=>{
    res.render("page4");
});

app.get("/contact", (req,res)=>{
    res.render("page5");
});



app.get("/form", (req,res)=>{
    res.render("form");
});


app.get("/contact", (req,res)=>{
    db.query("SELECT * FROM comments",(error, results)=>{ 
        res.render("comments", {comments: results});
    });
    
});

app.post("/contact", (req,res)=>{
    
    db.query("INSERT INTO comments(username,email,comment) VALUES(?,?,?)", [req.body.username,req.body.email,req.body.comment], (error, results)=>{
        res.render("addedlocation",{err: error})
    });

});


app.listen(9000, ()=>{ console.log("server started!"); })
