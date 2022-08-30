const dbConfig = require('../config/db.config.js');

//sequelize : 자바스크립트 객체와 관계형 데이터베이스를 서로 연결해주는 도구
//모듈 가져오기
const Sequelize = require('sequelize');
// 시퀄라이즈 생성자 인자에 config파일을 이용하여 데이터베이스, 유저 이름, 비밀번호를 입력
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
  	dialect: dbConfig.dialect,
  	operatorsAliases: false,
  
  	pool: {
    	max: dbConfig.pool.max,	
   		min: dbConfig.pool.min,
      	acquire: dbConfig.pool.acquire,
      	idle: dbConfig.pool.idle
    }
});

const db = {}; //빈 DB 정의
db.Sequelize = Sequelize; //빈 DB에 모델 연결(모듈 객체?)
db.sequelize = sequelize; //빈 DB에 모델 연결(생성된 객체?)

//tutorial에 테이블에 대한 정보. 추가 해주기
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize); 
db.user_info = require("./user_info.js")(sequelize, Sequelize); 
db.member = require("./member.js")(sequelize, Sequelize); 
db.order = require("./order.js")(sequelize, Sequelize); 
//

module.exports = db;