let employee = {
  basesalary: 3000,
  overtime: 10,
  time: 20,
  getWage: function () {
    console.log(this.basesalary + this.overtime * this.time);
  },
};
employee.getWage();

// Here the function doesnot have parameters. Someone said the best functions are those with no parameters
// So this is what encapsulation is all about
