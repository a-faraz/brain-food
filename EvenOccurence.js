/*
Even Occurrence


Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

*/


function evenOccurrence (arr) {
  for(var i=0; i<arr.length; i++) {
    var currentItem = arr[i];
    var count = 0;
    for(var j=0; j<arr.length; j++) {
      if(arr[j] === currentItem) count += 1;
    }
    if(count !== 0 && count % 2 === 0) return currentItem;
  }
  return null;
};