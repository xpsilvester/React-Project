var express=require('express');
var router = express.Router();  
var db = require("./db.js");
  
/* GET test page. */  

router.get('/data', function(req, res, next) { 
	//从数据库取值 
	db.query('SELECT * FROM userstest', function(err,results) {
	  if (err) throw err;
	  var data=JSON.stringify(results);
	  res.end(data);
	});
	
}); 


module.exports = router;