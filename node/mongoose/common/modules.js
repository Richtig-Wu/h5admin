var name;

exports.setName = function(myname){
  name = myname;
};

exports.nameHellow = function(){
  console.log("Hello," + name);
};
