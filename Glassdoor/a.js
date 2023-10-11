function lengthOfLastWord(sentence) {
  const words = sentence.trim().split(" ");

  if (words.length == 0) {
    return 0;
  }

  const lastWord = words[words.length - 1];
  return lastWord.length;
}

const sentence = "Hello Niranjan Powade";
let output = lengthOfLastWord(sentence);
console.log(output);
