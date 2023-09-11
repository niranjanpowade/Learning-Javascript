//What if we dont write new keyword in front of the object

function Bicycle(cadence, speed, gear) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  return this;
}

let bicycle1 = Bicycle(50, 20, 4);
console.log(bicycle1);

//It will point to Global object window
