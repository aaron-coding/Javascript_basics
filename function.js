Function.prototype.curry = function (numArgs) {
  var that = this;
  var allArgs = [];
  
  function _curriedFn (arg) {
    allArgs.push(arg);
    
    if (allArgs.length >= numArgs){
      return that.apply(null, allArgs);
    } else {
      return _curriedFn;
    } 
  }
  
  return _curriedFn;
}
