
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

const spawn = require("child_process").spawn;

const Sequelize = require("sequelize");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

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
