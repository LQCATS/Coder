var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
  //给前端响应数据
  res.send('holle word')
});

module.exports = router;
