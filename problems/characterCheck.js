function classifyCharacter(char) {
  if (/[A-Z]/.test(char)) {
    return 1; // Uppercase alphabet
  } else if (/[a-z]/.test(char)) {
    return 0; // Lowercase alphabet
  } else {
    return -1; // Not an alphabet
  }
}

const inputCharacter = prompt("Enter a single character:");

if (inputCharacter.length === 1) {
  const result = classifyCharacter(inputCharacter);

  if (result === 1) {
    console.log(1);
  } else if (result === 0) {
    console.log(0);
  } else {
    console.log(-1);
  }
} else {
  console.log("Invalid input. Please enter a single character.");
}
