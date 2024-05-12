let rn = Number.parseInt(Math.floor(Math.random() * 100) + 1);
const prompt = require("prompt-sync")();
let input = prompt("enter a number : ");
input = Number.parseInt(input);
//console.log(input, typeof input);
let score = 100;
while (input != rn || score > 0) {
  if (!input) {
    console.log("no input");
    input = prompt("enter a number : ");
  } else {
    if (input == rn) {
      console.log("correct guess");
      console.log(rn);
      console.log("your score is : ", score);
      break;
    } else {
      score--;
      if (input > rn) {
        console.log("guess is too high");
      } else {
        console.log("guess is too low");
      }
      input = prompt("enter a number : ");
    }
  }
}
