const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//faker
let faker = require('faker');
let phrase = faker.hacker.phrase();

//routes
app.get("/",function(req,res){
    res.render("index.html", {hackerPhrase:phrase});
});

app.get("/contribution.html",function(req,res){
   res.render("contribution.html", {hackerPhrase:phrase});
});

app.get("/history.html",function(req,res){
   res.render("history.html", {hackerPhrase:phrase});
});

app.get("/licensing.html",function(req,res){
   res.render("licensing.html", {hackerPhrase:phrase});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});
   
   

