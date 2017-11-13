var URL = require('url');  
var express = require('express');
var router = express.Router();

//数据库
var EasyMySQL = require('easy-mysql');
var settings = {
	    user     : 'root',
	    password : 'zhangchen',
	    database : 'shcms'
	};
var easy_mysql = EasyMySQL.connect(settings);
var TABNAME = 'managers'; 

	


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {

    var params = URL.parse(req.url, true).query;
    var response;

    var sql = 'SELECT * FROM '+TABNAME +' where id='+params.id;
    easy_mysql.get_one(sql, [], function (err, result) {
        
        	if (err) { 
			      throw err; 
			    } 
        	if(result==null){
        		res.send(JSON.stringify({status:0,data:null}));
        	}
			       if(result)
			      {
			    	   response = {status:1,data:result};
			    	   res.send(JSON.stringify(response));
			      }
    });
		
});

module.exports = router;