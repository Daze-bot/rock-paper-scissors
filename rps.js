function computerPlay () {
  let randomNum = Math.floor(Math.random()*3);
  
  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let playerSelectionInput = prompt("Please choose Rock, Paper, or Scissors and type it below" , "");
let playerSelection = playerSelectionInput.toUpperCase();
// Converted to uppercase to allow users to have case not matter on user input.
// When using playerSelection moving forward, will have to reference uppercase.

