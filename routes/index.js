var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Call payment service
  //URL - Read from env. 
  
  res.json({"message": "Hello from catalog service"});
});

module.exports = router;
