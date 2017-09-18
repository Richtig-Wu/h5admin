var fs = require('fs');
//
// var a = fs.stat('./abc',(err,stats)=>{
//   console.log(err?'不存在':'存在');
//   console.log(stats);
// });
var buff=new Buffer(1000);

var a = fs.open('../aa.md','r',(err,stats)=>{
  if(err) throw err;
    // console.log(stats);


fs.read(stats,buff,0,1000,null,(err,bread,buf)=>{
  if(err) throw err;
  console.log("read=",bread);
  console.log(buf);
});
  // fs.close(stats);
});
