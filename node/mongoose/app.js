var mongoose = require('mongoose');
var url = 'mongodb://10.198.1.29:27017/stu';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',function(){
  console.log("Connect error");
});

db.once('open',function(){
  console.log("ok!");
});

var Schema = mongoose.Schema;
var schema = new Schema({
  name: String,
  binary:Buffer,
  living:Boolean,
  updated:{type:Date,default:Date.now},
  age:{ type:Number, min:18,max:65},
  mixed:Schema.Types.Mixed,
  _someId:Schema.Types.ObjectId,
  array: [],
  ofString:[String],
  ofNumber:[Number],
  ofDates:[Date],
  ofBuffer:[Buffer],
  ofBoolean:[Boolean],
  ofMixed:[Schema.Types.Mixed],
  ofObjectId:[Schema.Types.ObjectId],
  nested:{
    stuff:{type:String, lowercase: true,trim:true}
  }
});

var Info = mongoose.model('Info',schema);
var m = new Info;
m.name = 'zhaosi'
m.age = 25;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = {any:{ thing:'i want'}};
m.markModified('mixed');
m._someId =new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("String!");
m.ofNumber.unshift(1,2,3,4);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three',{four:5}];
m.nested.stuff ='good';

m.save(function(err,data){
  console.log('save ok.');
});


// Info.findOne({},function(err,data){
//   console.log(data);
// });

var id = '599ec512ed1e9b3765dfcfa0';
Info.findById(id,function(err,info){
  console.log(info);
});
