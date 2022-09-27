
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

const db = require("../models");//이 models는 그냥 폴더일텐데 어떻게 모듈이 되는건가...? 아래를 보면 자동으로 index.js 를 가져오는듯
const board = db.board; //model/index.js의 변수 
const Sequelize = require("sequelize");

const Op = db.Sequelize.Op;

router.get('/read', async function(req, res, next){
    const board_data = await board.findAll({
        raw:true
    });
    
    console.log(board_data);

    return res.send(board_data);
    }
  )

router.get('/del', async function(req, res, next){
    let queryWhere= {};
    
    queryWhere.id = {
        [Op.in]:[req.query.id]
    }

    const board_data = await board.destroy({
        where: queryWhere,
        raw:true
    });
    
    res.send('del')

    return res.send(board_data);
    }
  ),

  router.get('/insert', async function(req, res, next){

    const board_data = await board.create({
        raw:true
    });
    
    res.send('insert')

    return res.send(board_data);
    }
  ),

  router.get('/edit', async function(req, res, next){
    let queryWhere= {};
    
    queryWhere.id = {
        [Op.eq]:[req.query.id]
    }

    const board_data = await board.destroy({
        where: queryWhere,
        raw:true
    });
    
    res.send('edit')
    // const new_data = [];

    // new_data[0] = ['date', 'cnt'];
    // for (i = 1; i< visual_data.length; i++) {
    //   new_data[i] = new Array();
    //   new_data[i].push(visual_data[i].date_t);
    //   // new_data[i].push(visual_data[i].comp_id);
    //   new_data[i].push(Number(visual_data[i].total_cnt)); 
    // }

    return res.send(board_data);
    }
  ),


module.exports = router;
