function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = {
  name: "John",
};

const sayHelloToJohn = sayHello.bind(person);

sayHelloToJohn();
