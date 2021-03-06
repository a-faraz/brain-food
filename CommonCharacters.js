/***

Common Characters

Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'

***/


Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr;
};

commonCharacters = function(string1, string2){
  var solution = '';
  var array1 = string1.replace(/ /g,'').split('').unique();
  var array2 = string2.replace(/ /g,'').split('').unique();
  for(var i=0; i<array1.length; i++) {
    if(array2.indexOf(array1[i]) !== -1) solution += array1[i];
  }
  return solution;
};