
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

const spawn = require("child_process").spawn;

const db = require("../models");//이 models는 그냥 폴더일텐데 어떻게 모듈이 되는건가...? 아래를 보면 자동으로 index.js 를 가져오는듯
const Tutorial = db.tutorials; //model/index.js의 변수 
const Sequelize = require("sequelize");

const Op = db.Sequelize.Op;

router.get('/', async function(req, res, next){
  var data = '접속'
  console.log('접속 완료')

  return res.send(data)
})


router.get('/tutorial', async function(req, res, next){
    if (!req.query.title) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
    }

    const tutorial = {
        title: req.query.title,
        description: req.query.description,
        published: req.query.published ? req.query.published : false,
    };

    await Tutorial.create(tutorial).then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tutorial.",
      });
    });
})



module.exports = router;
