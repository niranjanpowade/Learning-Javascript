let employee = {
  basesalary: 3000,
  overtime: 10,
  time: 20,
  getWage: function () {
    console.log(this.basesalary + this.overtime * this.time);
  },
};
employee.getWage();
