// var i =5;
// for(i;i>=1;i--){

//     for(j=i;j<=5;j++){

//     }

// }

function drawRightHalfPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    // Add spaces before asterisks
    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }
    // Add asterisks
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}
// Example usage
drawRightHalfPyramid(5);
