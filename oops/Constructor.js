// What is this?
// This is basically a reference to the object that is executing this peace of code.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(1); //New will create a empty object
