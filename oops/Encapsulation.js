// Encapsulation is the concept of bundling data and the methods that operate on that data into a single unit, which is called an object.
// Encapsulation helps in hiding the internal implementation details of an object from the outside, allowing for better control over the data and functions related to an object.

let employee = {
  basesalary: 3000,
  overtime: 10,
  time: 20,
  getWage: function () {
    console.log(this.basesalary + this.overtime * this.time);
  },
};
employee.getWage();
