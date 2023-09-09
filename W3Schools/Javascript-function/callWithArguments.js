const person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + "," + city + "," + country
    );
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
person.fullName.call(person1, "Miraj", "Bharat");
person.fullName.call(person2, "Miraj", "India");
