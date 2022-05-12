let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "You both chose Rock.  It's a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore += 1;
    return "Paper beats Rock.  You lose!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore += 1;
    return "Rock beats Scissors.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore += 1;
    return "Paper beats Rock.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "You both chose Paper.  It's a tie!";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore += 1;
    return "Scissors beats Paper. You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore += 1;
    return "Rock beats Scissors.  You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore += 1;
    return "Scissors beats Paper. You win!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    return "You both chose Scissors.  It's a tie!";
  } else {
    computerScore += 1;
    return "You didn't choose a valid answer. You lose!";
  }
}

function game() {
  for (let i = 1; i < 6; i++) {
    let playerSelectionInput = prompt("Round " + i + "\n\nPlease choose Rock, Paper, or Scissors and type it below:" , "");
    let playerSelection = playerSelectionInput.toUpperCase();
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    alert("You chose " + playerSelection + ". The computer chose " + computerSelection);
    alert(playRound(playerSelection, computerSelection));
    alert("The score is " + (playerScore / 2) + " to " + (computerScore / 2));
  }
}

game();

if (playerScore > computerScore) {
  alert("After 5 rounds of play...You beat the computer with a final score of " + (playerScore / 2) + " to " + (computerScore / 2) + "!");
} else if (playerScore < computerScore) {
  alert("After 5 rounds of play...You lost to the computer with a final score of " + (playerScore / 2) + " to " + (computerScore / 2) + "!");
} else {
  alert("After 5 rounds of play...You tied the computer with a final score of " + (playerScore / 2) + " to " + (computerScore / 2) + "!");
}
