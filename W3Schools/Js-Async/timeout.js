setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
// In the example above, myFunction is used as a callback.

// myFunction is passed to setTimeout() as an argument.

// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds
