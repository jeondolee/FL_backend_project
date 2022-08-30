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
  // 단어 찾아서 없애기

  member.hasMany(order)
  order.belongsTo(member,{
    foreignKey: 'mem_no'
  })
  

  if (req.body.join != 'inner') {
      res.status(400).send({
        message: "join can not be empty!",
      });
      return;
  }

  const join_data = await member.findAll({
    include: [
      { 
        model: order,
        as : 'mem_no', 
        required : true,
        attributes: ['mem_no'],
        // on: {
        //   mem_no: Sequelize.where(
        //     Sequelize.col("member.mem_no"),
        //     Op.eq,
        //     Sequelize.col("order.mem_no")
        //   )
        // }
      }
    ],
    // where: {
    //     mem_no : '10001'    
    // //   // 왜 이걸 order에서는 memeberMemno로 받아먹을까?
    // //   // order에 mem_no 있다고 있는데 왜.... 뭔가 order에 문제가 있을 것이다
    // }      
  });

  return res.send(join_data);
  }
)

module.exports = router;
