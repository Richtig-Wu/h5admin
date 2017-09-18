var fs = require('fs');

// var a = "我的天啊";
// var b = fs.writeFileSync("../aa.md",a,(err)=>{
//         if(err) throw err;
//         console.log("aaa");
// });
// console.log('第一个');

// var data = "111"
//
// try{
//   fs.writeFileSync('../aa.md',data,'utf-8');
// }catch(err){
//   console.log(err);
// }
//
// fs.access('../aa.md',(err)=>{
//   console.log(err ? 'Y':'N');
// });
var tmp ='./tmp';
fs.access(tmp,(err)=>{
  if(err !== null){
    fs.mkdir(tmp,(err)=>{
      console.log(err?'文件已存在':'创建成功');
    });
  }  else{
    fs.rmdir(tmp,(err)=>{
      console.log(err ? '文件不存在':'删除成功');
    });
  }
});
