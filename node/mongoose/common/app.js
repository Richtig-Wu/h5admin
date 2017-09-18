var a = require('./event.js');
a.on('read',function(){
  console.log('module a is ready');
});
