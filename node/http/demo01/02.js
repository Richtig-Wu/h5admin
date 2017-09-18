var a = (a,b,c,d) => {
  console.log(a*b*c*d);
};
a(1,2,3,4);

//b=函数名，=>前面是参数，=>后面的是输出语句， {console.log（aa）}是直接输出aa
var b = ()=>(100);
console.log(b());

var c= function(a,b,c,d){
  console.log(a*b*c*d);
}
c(1,2,3,4);


var d=function(){
console.log(100);
}
d();
