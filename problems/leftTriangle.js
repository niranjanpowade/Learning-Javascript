var i = 5;
var j = 5;
for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
