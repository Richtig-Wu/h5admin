var counter = 3;
function incCounter(){
  counter++;
  console.log('incCounter=',counter)
}

module.exports = {
  counter:counter,
  incCounter: incCounter,
};
