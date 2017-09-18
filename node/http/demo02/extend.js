var extend = require('util')._extend;

var original = {
  foo: 'bar'
};
var extended = extend(original,{another:'attribute'});

console.log(extended);
