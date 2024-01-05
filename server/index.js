const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUDdatabase"
});

app.use(express.json())



app.get("/", (req, res)=> {
    //select all from this table
    const sqlInsert =
    "INSERT INTO movie_reviews(id, movieName, movieReview) VALUES (1, 'inception', 'good movie');"
    db.query(sqlInsert ,(err,result) => {
        res.send("hello")
    });
});


app.listen(3001, () => {
    console.log("running on port 3001");
}); 