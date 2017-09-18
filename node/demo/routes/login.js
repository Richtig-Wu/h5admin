
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
var infos = [{name:'acg',age:23},{name:'wcg',age:22},{name:'g',age:23}];
console.log(req.query.name);
  res.render('login', { title: ' hello login',top:'<nav>1</nav>','name':'aaa','age':10,'sex':'boy',info:infos });

});

router.post('/',function(req,res){
  console.log("post =>",req.body);
  console.log(req.body.name);
  console.log(req.body.password);
  res.redirect("/");
})



module.exports = router;
