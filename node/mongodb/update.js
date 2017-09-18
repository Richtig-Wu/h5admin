var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://10.198.1.29:27017/test';

var mydbInit = function(db,callback){
  var doc = {
    'name':'zhongying',
    'age':22
  };
  db.collection('one').insertOne( doc , function(err,result){
    assert.equal(err,null);
    console.log("Inserted");
    callback();
  });
}
//查询对应数据
var findDB = function(db,callback){
   var students = db.collection('one').find();
   students.each(function(err,doc){
     assert.equal(err,null);
     if(doc !== null){
      //  console.log(doc);//输出查询数据
     }else {
       callback();
     }
   });
}

//更新对应数据
var updateDB = function(db,callback){
  db.collection('one').updateOne(
    {'name':'zhongying'},{$set:{'age':38}},
    function(err, doc){
    assert.equal(err,null);
    // console.log(doc);
    callback();
    });
};
// 删除
var deleteDB = function(db,callback){
  db.collection('one').deleteMany(
    {name:'zhongying' },function(err,result){
        // console.log(result);
        callback();
     }
)};

MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log('server');
  // mydbInit(db,function(){
  //   console.log('ok');
  //   db.close();
  // });
  // updateDB(db,function(){
  //   findDB(db,function(){
  //     db.close();
  //   });
  // });
    deleteDB(db,function(){
      db.close();
    })

});
