function sayHello() {
  console.log(`Hello, ${this.name}`);
}
const person = {
  name: "Niranjan",
};
sayHello.call(person);
