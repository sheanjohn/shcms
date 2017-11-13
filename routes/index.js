var express = require('express');
var router = express.Router();
var cfg=require('./config.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', cfg);
});

module.exports = router;
