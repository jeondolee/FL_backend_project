var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res, next){
    var gender = req.query.gender;
    var age = req.query.age;
    if(age>9){
        age = parseInt(req.query.age/10)*10;
    }

    console.log("## get request");
    res.render('result_page', {title: 'Express', gender : gender, age: age, method: "get"});
});

router.post('/', function(req, res, next){
    var gender = req.body.gender;
    var age = req.body.age;
    console.log("## post request");
    res.render('result_page', {title: 'Express', gender : gender, age: age, method: "post"});
});

module.exports = router;