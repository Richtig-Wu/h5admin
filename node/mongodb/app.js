var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://10.198.1.29:27017/test';

var mydbInit = function(db,callback){
  var doc = {
    'name':'zhongying',
    'age':22
  };
  db.collection('one').insertOne( doc , function(err,reult){
    assert.equal(err,null);
    console.log("Inserted");
    callback();
  });
}


MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log('server');
  mydbInit(db,function(){
    console.log('ok');
    db.close();
  });

});
