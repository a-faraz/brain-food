/*
Is Subset Of

Make an array method that can return whether or not a context array is a subset of an input array. 
To simplify the problem, you can assume that both arrays will contain only strings.
*/


Array.prototype.isSubsetOf = function(bigArray) {
  var uniqueSub = this.unique();
  var uniqueBig = bigArray.unique();
  var status = true;
  this.forEach(function(item) {
    if(bigArray.indexOf(item) === -1) status = false;
  });

  return status;

};

Array.prototype.unique = function() {
  var solution = [];
  for(var i=0; i<this.length; i++) {
    if(solution.indexOf(this[i]) === -1) solution.push(this[i]);
  }
  return solution;
};
