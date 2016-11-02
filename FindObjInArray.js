/*
findObjectInArray

Given a name (string) and an array of people (objects), find the person with the given name and return his/her hobby. 
Return false if there is no person with the given name.

DO NOT use people.find()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/


function find (name, people) {
  var i=0;
  function recurse(item){
    console.log('person', people[i]);
    if(i >= people.length) return false;
    if(people[i].name === name) return people[i].hobby;
    return recurse(people[i+=1]);
  }
  return recurse(people[0]);
};
