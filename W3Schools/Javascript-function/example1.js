const person = {
  firstName: "Niranjan",
  lastName: "Powade",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.fullName();
