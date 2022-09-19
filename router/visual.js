
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

const db = require("../models");//이 models는 그냥 폴더일텐데 어떻게 모듈이 되는건가...? 아래를 보면 자동으로 index.js 를 가져오는듯
const visual = db.visual_data; //model/index.js의 변수 
const Sequelize = require("sequelize");

const Op = db.Sequelize.Op;

// router.get('/', async function(req, res, next){
//     const visual_data = await visual.findAll();
  
//     return res.send(visual_data);
//     }
//   )

router.post('/comp', async function(req, res, next){

    let queryWhere= {};
    queryWhere.comp_id = {
        [Op.eq]:req.body.comp_id
    }

    const visual_data = await visual.findAll({
      where: queryWhere,
      raw:true
      }
    );
    
    const new_data = [];

    new_data[0] = ['date', 'cnt'];
    for (i = 1; i< visual_data.length; i++) {
      new_data[i] = new Array();
      new_data[i].push(visual_data[i].date_t);
      // new_data[i].push(visual_data[i].comp_id);
      new_data[i].push(Number(visual_data[i].total_cnt)); 
    }

    //console.log(new_data); 


    return res.send(new_data);
    }
  ),

  router.post('/date', async function(req, res, next){

    let queryWhere= {};
    
    queryWhere.date_t = {
      [Op.and]:{
        [Op.gt]: req.body.fromDate,
        [Op.lte]: req.body.toDate
      }
    },
    queryWhere.comp_id = {
      [Op.eq]:req.body.comp_id
    }

    const visual_data = await visual.findAll({
      where: queryWhere,
      raw:true
      }
    );

    const new_data = [];

    new_data[0] = ['date', 'cnt'];
    for (i = 0; i< visual_data.length; i++) {
      new_data[i+1] = new Array();
      new_data[i+1].push(visual_data[i].date_t);
      // new_data[i].push(visual_data[i].comp_id);
      new_data[i+1].push(Number(visual_data[i].total_cnt)); 
    }

    // if(new_data.length<1){
    //   return NULL
    // }

    return res.send(new_data);
    }
  )


module.exports = router;
