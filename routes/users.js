var express = require('express');
var router = express.Router();

var jsonData = require('../public/testData/data.json');

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

router.post('/update', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json({msg:'this is cors-enabled'});
  console.log(req);
  res.json(jsonData);
});

module.exports = router;
