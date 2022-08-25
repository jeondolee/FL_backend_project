const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

const Sequelize = require("sequelize");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

router.post('/tutorial', async function(req, res, next){
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
    }

    let queryWhere= {};
    queryWhere.title = {
        [Op.eq]:req.body.title, 
    }

    const tutorialData = await Tutorial.findAll({
        where : queryWhere,
        raw:true
    });

    return res.send(tutorialData);
    }
)

router.post('/', function(req, res, next){
    
    //res.render('post_page', { title: 'Express'});

    var from = req.body.gender;
    var to = req.body.age;
    var result = 0;

    for(var i = 0; i<from - to; i++){
        result += from+i;
    }

    console.log("result is " + result);

})

module.exports = router;