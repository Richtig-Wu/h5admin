var http = require('http');
var serv = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<div class="a">
  <p>今天</p>
  </div>')
  res.end('<h1>Hellow Welcome to Node.js</h1>');
});
serv.listen(3000);
