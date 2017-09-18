var fs = require("fs");
fs.readFile("../aa.md",function(err,data){
  if(err){
    console.error("aaa",err);
  }else{
    console.log(data);

  }
});
console.log('11');
