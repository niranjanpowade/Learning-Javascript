function randomFunc() {
  var obj1 = { name: "Vivian", age: 45 };
  return function () {
    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the ran
  };
}
var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure();

// Let’s understand the code above,
// The function randomFunc() gets executed and returns a function when we assign it
// to a variable:
// var initialiseClosure = randomFunc();
// The returned function is then executed when we invoke initialiseClosure:
// initialiseClosure();
// The line of code above outputs “Vivian is awesome” and this is possible because of
// closure.
// console.log(obj1.name + " is "+ "awesome");
// When the function randomFunc() runs, it seems that the returning function is using
// the variable obj1 inside it:
// Page 32 © Copyright by Interviewbit
// function randomFunc(){
// var obj1 = {name:"Vivian", age:45};
// return function(){
// console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the ran
// }
// }
// var initialiseClosure = randomFunc(); // Returns a function
// initialiseClosure();
// JavaScriptInterview Questions
// Therefore randomFunc(), instead of destroying the value of obj1 a
