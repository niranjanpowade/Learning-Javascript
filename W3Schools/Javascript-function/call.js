// The call() method is often used when you want to borrow a method from one object and use it on another object. It allows you to explicitly set the this value.
const person = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
const person1 = {
  firstName: "Niranjan",
  lastName: "Powade",
};
const person2 = {
  firstName: "Moin",
  lastName: "Bagwan",
};
person.fullName.call(person1);
person.fullName.call(person2);
