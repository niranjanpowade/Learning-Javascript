function createName(firstName, lastName, age, gender) {
  const name = {};
  name.firstName = firstName;
  name.lastName = lastName;
  name.age = age;
  name.gender = gender;
  return name;
}
console.log(createName("Niranjan", "Powade", 22, "Male"));
