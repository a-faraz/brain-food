/*
stringInArray

Given a string and an array of strings, return true if the string exists in the array, and false if it does not.

DO NOT use .includes() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/


function searchString(str, array) {
  var i = 0;
  function findIt(item) {
    if(item === str) return true;
    if(i >= array.length) return false;
    return findIt(array[i= i+1]);
  }
  return findIt(array[0]);
};
