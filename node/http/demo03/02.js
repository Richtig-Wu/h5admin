var a = require('http');
var qs = require('querystring');
var fs = require('fs');
var serv = a.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  if('/' == req.url){
    res.end(['<h1>aaa</h1>',
      '<form method="POST" action="/url">',
      '<fieldset>',
      '<label>登录</labal>',
      '<p>Name</p>',
      '<input type ="text" name="name">',
      '<p>password</p>',
      '<input type = "password" name="password">',
      '<p><button>sumit</button></p>',
      '</form>'
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
      });

  req.on('end',function(){
    res.writeHead(200,{'Content-Type':'text/html','Charset':'utf-8'});
    res.end(['<p>YOU sent a <em>' + req.method + '</em> request</p>',
    '<p>Data:<br>Name:' + qs.parse(name).name + '</p>',
    '<p>Password:'+qs.parse(name).password+'</p>'
   ].join(''));
    var da = qs.parse(name);

    fs.readFile('./02.md','utf-8',(err,data)=>{
      if(err) throw err;

    var ta = data.split('\n');
    ta.forEach((tas,index)=>{
      if(tas){
        console.log(index,tas);
        a=qs.parse(tas);
      }
    });
  });

    fs.writeFile('./02.md','Name:'+ da.name+'  '+'Password:'+da.password+ '\n',options,function(err,res){
      if(err) throw err;
    });
  });


}else if ('/url' == req.url && 'GET' == req.method){
  res.end('Welcom to <a href="/">跳转</a>');
}



}).listen(3001);
