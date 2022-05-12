function computerPlay() {
  let randomNum = Math.floor(Math.random()*3);
  
  if (randomNum === 0) {
    return "ROCK";
  } else if (randomNum === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}
let computerSelection = computerPlay();
console.log(computerSelection);

let playerSelectionInput = prompt("Please choose Rock, Paper, or Scissors and type it below" , "");
let playerSelection = playerSelectionInput.toUpperCase();
// Converted to uppercase to allow users to have case not matter on user input.
// When using playerSelection moving forward, will have to reference uppercase.
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "You both chose Rock.  It's a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "Paper beats Rock.  You lose!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "Rock beats Scissors.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "Paper beats Rock.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "You both chose Paper.  It's a tie!";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "Scissors beats Paper. You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "Rock beats Scissors.  You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "Scissors beats Paper. You win!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "You both chose Scissors.  It's a tie!";
  }
}
console.log(playRound(playerSelection, computerSelection));