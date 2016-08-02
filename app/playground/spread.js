// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vick'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age){
  return "Hi "+name+", you are "+age;
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = [...names, 'Sang'];

var finalFunc = final.forEach(function(name){
  console.log( 'Hi '+name+"!");
});
