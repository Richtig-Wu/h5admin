var fs = require('fs');
// var path = '../aa.md';
// var opt = null;
var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NOTE_DEBUG);
var util = require('util');
// var fs = 'exports';

function rethrow(){
  if(DEBUG){
    var back = new error;
    return function(err){
      if(err){
          back.stack = err.name +':'+ err.message + back.stack.substr(back.name.length);
          err = back;
          throw err ;
      }
    };
  }
  return function(err){
    if(err){
      throw err ;
    }
  };
}


function mycallback(a) {
  return util.isFunction(a)? a:rethrow();
}
function assertEncoding(encoding) {
  if (encoding && !Buffer.isEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}
fs.MyreadFile = function(path,opt,callback_){
  var callback = mycallback(arguments[arguments.length -1]);

  if(util.isFunction(opt)||!opt){
    opt ={encoding:null,flag:'r'};
  }else if(util.isString(opt)){
    opt = {encoding:opt,flag:'r'};
  }else if(!util.isObject(options)){
    throw new TypeError('Bad arguments');
  }
  var encoding = opt.encoding;
  assertEncoding(encoding);

  var size;
  var buffer;
  var buffers;
  var pos = 0;
  var fd;

  var flag =opt.flag ||'r';

  fs.open(path,flag,438 /*=0666*/,function(err,fd_){
    if(err) return callback(err);
    fd = fd_;

    fs.fstat(fd,function(er,st){
      if(er){
        return fs.close(fd,function(){
          callback(er);
        });
      }
      size = st.size;
      if(size === 0){
        buffers = [];
        return read();
      }

    
      buffer = new Buffer(size);
      read();
    });
  });
  function read(){
    if(size === 0){
      buffer = new Buffer(8192);
      fs.read(fd,buffer, 0 ,8192,-1,afterRead);
    }else{
      fs.read(fd,buffer,pos,size - pos , -1 ,afterRead);
    }
  }
  function afterRead(er,bytesRead){
    if(er){
      return fs.close(fd,function(er2){
        return callback(er);
      });
    }

    if(bytesRead === 0){
      return close();
    }

    pos += bytesRead;
    if(size !== 0){
      if(pos === size) close();
      else read();
    }else {
      buffers.push(buffer.slice(0,bytesRead));
      read();
    }
  }

  function close(){
    fs.close(fd,function(er){
      if(size === 0){
        buffer = Buffer.concat(buffters,pos);
      }else if(pos < size){
        buffer = buffer.slice(0,pos);
      }
      if(encoding) buffer = buffer.toString(encoding);
      return callback(er,buffer);
    });
  }
};

fs.MyreadFile("../aa.md","utf8",function(err,state){
  if(err) throw err;
  console.log(state);
});
