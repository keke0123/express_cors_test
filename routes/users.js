var express = require('express');
var router = express.Router();

var jsonData = require('../public/testData/data.json');
var jsonData2 = require('../public/testData/data2.json');

// cors 관련 테스트
//var cors = require('cors');
//router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  setTimeout(function(){
    res.json(jsonData);
  }, 5000);
});

router.get('/list1', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  setTimeout(function(){
    res.json(jsonData);
  }, 1000);
});

router.get('/list2', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  setTimeout(function(){
    res.json(jsonData2);
  }, 1000);
});

router.post('/delete', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  console.log(req.body);
  // req.params
  // req.query
  // req.body
  // req.headers
  res.json({
    result: 'success'
  });
});

router.post('/update2', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  console.log(req);
  res.json(jsonData2);
});

module.exports = router;
