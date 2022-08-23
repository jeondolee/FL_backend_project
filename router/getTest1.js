
const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

router.get('/', function(req, res){
    res.redirect('https://www.naver.com')
})

module.exports = router;
