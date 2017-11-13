var express = require('express');
var router = express.Router();
var md5 = require('md5');
var EasyMySQL = require('easy-mysql');
var URL=require("url");

/*
 * 载入数据库配置
 * 链接数据库
 */
var db=require('./db.js');
var easy_mysql = EasyMySQL.connect(db);

/*
 * 载入网站配置
 */
var cfg=require('./config.js');

/*
 * 登陆页
 */
router.get('/', function(req, res, next) {
	res.render('admin/login', cfg);
});


/*
 * 登陆请求
 */
router.post('/login',function(req,res,next){
	var params = URL.parse(req.url, true).query;
    var uname=req.body.uname;
    var upswd=md5(req.body.upswd);
    var sql = "SELECT * FROM managers where uname='" + uname +"' and upswd='" + upswd +"'";
    easy_mysql.get_one(sql, [], function (err, result) {
        	if (err) { 
				throw err; 
			} 
        	if(result==null){
        		res.send('false');
        	}
			if(result){
				var u={
						uname:result.ulevel,
						ulevel:result.ulevel
				}
				res.send(JSON.stringify(u));
				//res.send('true');
			}
    });
});

/*
 * 注销请求
 */
router.post('/logout',function(req,res){
	res.send('true');
})


/*
 * 控制台首页
 */
router.get('/ds',function(req,res){
	res.render('admin/ds', cfg); 
})



module.exports = router;
