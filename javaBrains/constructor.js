//Always start your constructor with a capital character so you will get to know that it is a constructor not a function
function createBicycle(cadence, speed, gear) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
}
let bicycle1 = new createBicycle(50, 20, 4); //Write new so it can understand that it is a constructor.
console.log(bicycle1);
