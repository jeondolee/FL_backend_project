//const Sequelize = require("sequelize");
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

//const spawn = require("child_process").spawn;

const db = require("../models");//이 models는 그냥 폴더일텐데 어떻게 모듈이 되는건가...? 아래를 보면 자동으로 index.js 를 가져오는듯
const user_info = db.user_info; //model/index.js의 변수 
const order = db.order;
const member = db.member;
const Sequelize = require("sequelize");
//const { FOREIGNKEYS } = require('sequelize/types/query-types');

const Op = db.Sequelize.Op;

//join member-order = 1:N

//db.order.belongsTo(db.member, {FOREIGNKEYS: 'mem_no'} )

//1.get user_info 조회
router.get('/user_info', async function(req, res, next){
  const user_info_data = await user_info.findAll();

  return res.send(user_info_data);
  }
)
//2.member 조회
router.get('/member', async function(req, res, next){
  const member_data = await member.findAll();

  return res.send(member_data);
  }
)
//3.join
router.post('/member_join', async function(req, res, next){
  /*
    [target 모델의 이름 + target 모델의 주요 키 이름] 로 자동 생성되는 것이 기본값입니다.
    기본 명명 규칙은 camelCase이지만, source 모델이 underscored: true로 설정되어있다면, 외래 키는 snake_case로 명명됩니다.
    as가 사용되면 여기서 정의된 이름이 target 모델의 이름으로 사용됩니다.
    foreignKey 옵션을 주면, as 옵션을 모두 무시하고 foreignKey 옵션의 값에 따라 외래 키 컬럼을 이름짓습니다.
  */
  member.hasMany(order, {foreignKey: 'mem_no'})
  order.belongsTo(member, {foreignKey: 'mem_no'})  

  // if (req.body.join != 'inner') {
  //     res.status(400).send({
  //       message: "join can not be empty!",
  //     });

  //     return;
  // }

  if (JSON.parse(req.body.join) != 'inner') {
    return res.status(400).send({
      //JSON 타입이 아니라 그런가?
      join_data: "join can not be empty!",
    });
  }

  const join_data = await member.findAll({
    include: [
      { 
        model: order,
        //as : 'order', 
        required : true,
        //attributes 없거나 on 없을 경우 에러 발생
        // => 아 foregin key 지정해주니 해결
        //attributes: ['order_no'],
        // on: {
        //   mem_no: Sequelize.where(
        //     Sequelize.col("member.mem_no"),
        //     Op.eq,
        //     Sequelize.col("orders.mem_no")
        //   )
        // }
      }
    ],      
  });

  return res.send(join_data);
  }
)

module.exports = router;
