/*

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require(".");
db.sequlize.sync();

app.get("/", (req, res, next) => {
    console.log("hello")
});


var corOptions = {
    orgin: "http://localhost:8081"
};

app.use(cors(corOptions));

app.use(bodyParser.json);

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application."});
});

const PORT = process.env.PORT||8080;
app.listen(PORT, () => {
    console.log(`Server is runningon port ${PORT}!`);
});

*/