function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }
  
  var pivot = arr[0];
  var left = [];
  var right = [];
  
  arr.slice(1).forEach(function(el){
    if (el < pivot){
      left.push(el);
    } else {
      right.push(el);
    }
  })
  
  return quickSort(left).concat(pivot).concat(quickSort(right))  
}