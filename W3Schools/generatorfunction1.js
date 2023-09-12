function* countUpTo(limit) {
  let count = 1;
  while (count <= limit) {
    yield count;
    count++;
  }
}

const counter = countUpTo(5);

console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
console.log(counter.next().value); // Output: 3
console.log(counter.next().value); // Output: 4
console.log(counter.next().value); // Output: 5
console.log(counter.next().value); // Output: undefined (done: true)
