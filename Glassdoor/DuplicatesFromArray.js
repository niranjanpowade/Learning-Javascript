const arr = [1, 2, 3, 4, 2, 1, 3, 5, 6, 7, 5, 5, 77];
const uniqueSet = new Set();
const duplicates = [];

for (const value of arr) {
  if (uniqueSet.has(value)) {
    duplicates.push(value);
  } else {
    uniqueSet.add(value);
  }
}
console.log(duplicates);
