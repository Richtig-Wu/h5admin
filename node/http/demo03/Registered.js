var a = require('http');
var qs = require('querystring');
var fs = require('fs');
// var getIP = require('request-ip');
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
      });

  req.on('end',function(){
    res.writeHead(200,{'Content-Type':'text/html','Charset':'utf-8'});

    var da = qs.parse(name);

    fs.readFile('./02.md','utf-8',(err,data)=>{
      if(err) throw err;

    var ta = data.split('\n');

      var d=1;
      for (var i = 0; i < ta.length-1; i++) {
        var a=qs.parse(ta[i]);

        if((da.name && da.password)&&(da.name !== a.name)){
            d = 2;

        }else if(da.name == a.name) {
          d=3;
          break;
        }else {
                d=1;
        break;
      }

  }

    if ( d==2) {
      res.end(['<a href="/login">恭喜你，注册成功</a>',

      '<p>Information:<br>Name:' + qs.parse(name).name + '</p>',
      '<p>Password:'+qs.parse(name).password+'</p>'
    ].join(''));
    fs.writeFile('./02.md',name + '\n',options,function(err,res){
      if(err) throw err;
      // console.log("注册成功");
    });
  }else if (d==3) {
    res.end('<a href="/">用户名重复</a>');
    console.log("重复");
  }else if(d==1){
      res.end('<a href="/">用户名或密码为空</a>');
  }
  });

  });
}else if('/login' == req.url && 'POST' == req.method){
    res.end(['<h1>Login Interface</h1>',

      '<form method="POST" action="/asd">',
      '<fieldset>',
      '<label><h2>User Login</h2></labal>',
      '<p>Name</p>',
      '<input type ="text" name="name">',
      '<p>password</p>',
      '<input type = "password" name="password">',
        '<p><button>登录</button>&nbsp;&nbsp;&nbsp;&nbsp;',
        '<button style="padding:0;"><a href="/" style="display:block; width:38px;height:21px;line-height:23px;">注册</a></button></p>',
      '</form>'
  ].join(''));




}else if (('/url' == req.url || req.url =='/asd') && 'GET' == req.method){

    res.end('<a href="/">注册界面</a>');

}
// else{
//   res.writeHead(404);
//   res.end('Not found!')
// }
}).listen(3002);
