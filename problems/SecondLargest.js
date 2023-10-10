function findSecondLargestElem(arr) {
  let first = -1,
    second = -1;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1];
findSecondLargestElem(arr);

// The code you provided defines a JavaScript function called `findSecondLargestElem` that finds and prints the second largest element in an array. Here's a step-by-step explanation of how it works:

// 1. **Initialization:** Two variables, `first` and `second`, are initialized to -1. These variables will be used to keep track of the first and second largest elements in the array. Since -1 is less than any possible element in the array, it serves as an initial placeholder value.

// 2. **Loop through the Array:** The code then enters a `for` loop to iterate through each element of the input array `arr`.

//    ```javascript
//    for (let i = 0; i <= arr.length - 1; i++) {
//      // Loop logic goes here
//    }
//    ```

// 3. **Comparing Elements:** Inside the loop, the code compares the current element `arr[i]` with the current `first` and `second` variables to determine their values.

//    - If `arr[i]` is greater than the current `first` element, it means `arr[i]` is the new largest element found so far. In this case, `second` is updated to hold the previous `first`, and `first` is updated to hold `arr[i]`.

//    - If `arr[i]` is greater than the current `second` element but not equal to the current `first` (to avoid updating `second` with a duplicate of the largest element), then `second` is updated to hold `arr[i]`.

// 4. **Printing the Second Largest Element:** After the loop completes, the `second` variable will contain the second largest element in the array. The code then prints this value using `console.log(second)`.

// Here's how it works with your provided array `arr = [12, 35, 1, 10, 34, 1]`:

// - First iteration: `first` becomes 12, and `second` remains -1.
// - Second iteration: `second` becomes 12, and `first` becomes 35.
// - Third iteration: `second` remains 12, as 1 is not greater than `first`.
// - Fourth iteration: `second` remains 12, as 10 is not greater than `first`.
// - Fifth iteration: `second` becomes 34, and `first` remains 35.
// - Sixth iteration: `second` remains 34, as 1 is not greater than `first`.

// So, after the loop, the `second` variable holds the value 34, which is the second largest element in the array. The code then prints `34` to the console.
