function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString(); // Generate a unique key based on function arguments
    if (cache.has(key)) {
      return cache.get(key); // Return cached result
    } else {
      const result = fn(...args); // Compute result
      cache.set(key, result); // Cache the result
      return result; // Return the result
    }
  };
}

// Example of a computationally expensive function to be memoized
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Apply memoization to the Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Calculate Fibonacci numbers efficiently using memoization
console.log(memoizedFibonacci(10)); // Result: 55 (calculated once and cached)
console.log(memoizedFibonacci(20)); // Result: 6765 (calculated once and cached)
