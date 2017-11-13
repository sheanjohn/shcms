var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post',function(req,res,next){
	 response = {
		       aname:req.body.aname
		   };
	 //res.end(JSON.stringify(response));
	 res.send(req.body.aname);
});

module.exports = router;
