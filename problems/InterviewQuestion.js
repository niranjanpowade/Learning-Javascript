function sortTheArray(array) {
  const sortedArray = array.sort((a, b) => a.age - b.age);
  return sortedArray;
}

const persons = [
  { name: "Gaurav", age: 25 },
  { name: "Rushi", age: 19 },
  { name: "swati", age: -22 },
  { name: "ruhi", age: 5 },
];
console.log(sortTheArray(persons));
