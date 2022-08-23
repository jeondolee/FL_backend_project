var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
    res.render('post_page', { title: 'Express'});
});

module.exports = router;