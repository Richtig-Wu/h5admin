var a = require('http');
var serv = a.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  if('/' == req.url){
    res.end(['<h1>aaa</h1>',
      '<form method="POST" action="/url">',
      '<fieldset>',
      '<label>登录</labal>',
      '<p>Name</p>',
      '<input type ="text" name="name">',
      '<p><button>sumit</button></p>',
      '</form>'
  ].join(''));
}else if ('/url' == req.url && 'POST' == req.method) {
  res.end('<p>YOU sent a <em>' + req.method + '</em> request</p>');
}else if ('/url' == req.url && 'GET' == req.method){
  res.end('Welcom to <a href="/">跳转</a>');
}



}).listen(3000);
