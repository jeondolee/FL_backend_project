
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

    const visual_data = await visual.findAll({
      where: queryWhere,
      raw:true
      }
    );
    
    // 그냥 쿼리를 돌리는게 나을까?
    // date 년도별로 - distict로 뽑고
    // cnt 연도별 평균

    // 아니면 if문 걸어서 파싱?
    // 

    // 결국 하나의 colum이 되게끔 만들어서 줘야한다.
    //=> 각 년도의 항목 갯수, cnt 평균
    
    const new_data = [];
    const id = [];
    const date = [];
    const cnt = [];

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
  )


module.exports = router;
