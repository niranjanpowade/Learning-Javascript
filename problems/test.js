const input1 = [1, 12, 31, 16, 12, 4, 5, 16, 11, 31];
let maxElement = 0;
let secondMaxElement = 0;
for (let i = 0; i < input1.length; i++) {
  if (input1[i] > maxElement) {
    maxElement = input1[i];
  }
}

for (let i = 0; i < input1.length; i++) {
  if (input1[i] > secondMaxElement && input1[i] < maxElement) {
    secondMaxElement = input1[i];
  }
}

console.log(secondMaxElement);
