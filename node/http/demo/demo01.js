var a = require("fs");
//回调函数属于异步操作，在同步代码执行完后才执行
a.readFile("./aaa.md",'utf-8',function(err,data){
  if(err){
    console.error(err);
  }
  else{
    console.log(data);
  }
});

console.log("111");
