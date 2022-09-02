
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

    //const comp_id = JSON.parse(req.body.comp_id)

    let queryWhere= {};
    queryWhere.comp_id = {
        [Op.eq]:req.body.comp_id,
        
    }

    console.log(queryWhere.comp_id); 

    const visual_data = await visual.findAll({
      where: queryWhere,
      raw:true
      }
    );

    return res.send(visual_data);
    }
  )


module.exports = router;
