
var fs = require('fs');

var buff=new Buffer(1000);

var a = fs.open('../aa.md','r',(err,stats)=>{
  if(err) throw err;


fs.read(stats,buff,0,1000,null,(err,bread,buf)=>{
  if(err) throw err;
  console.log("read=",bread);
  console.log(buf);
});
 console.log(stats);
});
