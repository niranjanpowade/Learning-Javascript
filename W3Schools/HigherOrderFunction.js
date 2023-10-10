function higherOrder(fn) {
  fn();
}
higherOrder(function () {
  console.log("Hello world");
});
//Higher-order functions are a result of functions being first-class citizens in
// javascript.
