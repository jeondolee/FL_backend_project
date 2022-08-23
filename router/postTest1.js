const express = require('express'); //서버 사용
const router  = express.Router(); // express lib 서버 내부 기능
const request = require('request'); //api 사용

router.post('/', function(req, res, next){
    console.log("umm");
    res.render('post_page', { title: 'Express'});
/*
    var from = req.body.gender;
    var to = req.body.age;
    var result = 0;

    for(var i = 0; i<from - to; i++){
        result += from+i;
    }

    console.log("result is " + result);
*/
})

module.exports = router;