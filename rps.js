let playerScore = 0;
let computerScore = 0;
let playerSelectionInput = "";

const results = document.querySelector('.results');
let buttons = document.querySelectorAll('.button');

buttons.forEach((press) => {
  press.addEventListener('click', () => {
    playerSelectionInput = press.textContent;
    playGame(playerSelectionInput);
  });
});

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
    return "It's a tie!";
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
    return "It's a tie!";
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
    return "It's a tie!";
  } else {
    computerScore += 1;
    return "You didn't choose a valid answer so you lose by default!" +
        "\n(Double check your spelling!)";
  }
}

function playGame(playerSelectionInput) {
  for (let i = 1; i < 6; i++) {
    //alert("Round " + i + " of 5" +
        //"\n\nPlease choose Rock, Paper, or Scissors below: ");
    let playerSelection = playerSelectionInput.toUpperCase();
    let computerSelection = computerPlay();

    alert("You chose " + playerSelection + "\nThe computer chose " +
        computerSelection + "\n\n" + playRound(playerSelection, computerSelection));
    
    if (i < 5) {
      alert("The score is " + playerScore + " to " + computerScore);
    } else {
      if (playerScore > computerScore) {
        alert("After 5 rounds of play...You beat the computer with a final score of:\n" +
            playerScore + " to " + computerScore);
      } else if (playerScore < computerScore) {
        alert("After 5 rounds of play...You lost to the computer with a final score of:\n" +
            playerScore + " to " + computerScore);
      } else {
        alert("After 5 rounds of play...You tied the computer with a final score of:\n" +
            playerScore + " to " + computerScore);
      }
    }
  }
}