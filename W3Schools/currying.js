function add(x) {
  return function (y) {
    return x + y;
  };
}

// Using the curried add function
const addThree = add(3); // Returns a function that adds 3 to its argument
const sum = addThree(8); // Result: 7
const sum1 = addThree(9);
console.log(sum);
console.log(sum1);
