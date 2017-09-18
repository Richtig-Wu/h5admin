var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function(){
  module.exports.emit('read');
},1000);
