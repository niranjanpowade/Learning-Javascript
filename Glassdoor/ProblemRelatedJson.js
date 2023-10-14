const json = [
  {
    name: "Niranjan",
    age: 28,
  },
  {
    name: "Abhishek",
    age: 35,
  },
  {
    name: "Sunita",
    age: 25,
  },
];

const filteredData = json
  .filter((employee) => employee.age > 30)
  .map((employee) => employee.age);
console.log(filteredData);

// In this line of code, the callback function for the filter method is employee => employee.age > 30. Here's how it works:

// The filter method iterates through each element (in this case, each employee object) in the jsonData array.
// For each employee object, the callback function is called.
// The employee parameter represents the current element being processed.
// The callback function, employee => employee.age > 30, checks if the age property of the current employee is greater than 30.
// If the condition employee.age > 30 is true, the current employee is included in the filteredEmployees array; otherwise, it is excluded.
