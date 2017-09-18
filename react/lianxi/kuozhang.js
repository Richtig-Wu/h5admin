// const [first, ...rest] = [1,2,3,4,5];
//
// // const [first, ...rest] = [];
// //
// console.log(first);
// console.log(rest);

var target ={a:1, b:1};

var sou = {b:2 , c:2};
var sou2 = {c:3 ,d:12};
console.log(Object.assign(target,sou,sou2));
