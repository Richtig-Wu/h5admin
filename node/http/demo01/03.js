var fs = require('fs');
//
// var a = fs.readFileSync('../aa.md');
// console.log("fs",a);

var bb = new Buffer([0x62]);
var bbb = "威哥今天真的骗我了";
var b = fs.writeFile("../aa.md",bbb,(err)=>{
  if(err) throw err;
  console.log('这是真的');
});
