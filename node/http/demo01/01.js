var fs = require('fs');

fs.readFile('../text.md',(err,data) => {
  if(err) throw err;
  else{
    console.log(data);
  }
