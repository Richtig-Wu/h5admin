var a = require('http');
var qs = require('querystring');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var value = 0;
function fun() {}
fun();
var url = 'mongodb://10.198.1.29:27017/test';
var serv = a.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  if('/' == req.url ){
    res.end(['<h1>RegisterForm</h1>',
        '<form method="POST" action="/url">',
        '<fieldset>',
        '<label><h3>RegisteredUser</h3></labal>',
        '<p>Name</p>',
        '<input type ="text" name="name">',
        '<p>password</p>',
        '<input type = "password" name="password">',
        '<p><button>注册</button>&nbsp;&nbsp;&nbsp;&nbsp;</p>',
        '</form>',
        '<form method="POST" action="/login" >',
        '<button>登录</button>',
        '</from>'
    ].join(''));

}else if ('/url' == req.url && 'POST' == req.method) {
  var name = '';
  var password = '';
  var options = {
    encoding:'utf8',
    mode:0o666,
    flag:'a'
  }
  req.on('data',function(chunk){
    name += chunk;
    var da = qs.parse(name);
    var doc = {
      'name':da.name,
      'password':da.password
    };
    var mydbInit = function(db,callback){
      db.collection('one').insertOne( doc , function(err,result){
        assert.equal(err,null);
        callback();
      });
      var one = db.collection('one').find({});
    }

  MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log('server',doc);
    mydbInit(db,function(){
      console.log('close');
      db.close();
    });
  });
});


}else if (('/url' == req.url || req.url =='/asd') && 'GET' == req.method){

    res.end('<a href="/">注册界面</a>');

}
// else{
//   res.writeHead(404);
//   res.end('Not found!')
// }
}).listen(3003);
