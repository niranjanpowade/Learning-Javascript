function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = {
  name: "John",
};

sayHello.apply(person, ["Hello"]); // Output: Hello, John
