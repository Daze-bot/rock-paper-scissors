let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const results = document.querySelector('.results');
let buttons = document.querySelectorAll('.button');

function buttonSelection() {
  buttons.forEach((press) => {
    press.addEventListener('click', () => {
      let playerSelectionInput = press.textContent;
      let computerSelection = computerPlay();
      let playerSelection = playerSelectionInput.toUpperCase();
      alert("You chose " + playerSelection + "\nThe computer chose " +
          computerSelection + "\n\n" + playRound(playerSelection, computerSelection));
      if (roundCount === 5 && playerScore > computerScore) {
        alert("After 5 rounds of play...You beat the computer with a final score of:\n" +
            playerScore + " to " + computerScore);
      } else if (roundCount === 5 && playerScore < computerScore) {
        alert("After 5 rounds of play...You lost to the computer with a final score of:\n" +
            playerScore + " to " + computerScore);
      } else if (roundCount === 5 && playerScore === computerScore) {
        alert("After 5 rounds of play...You tied the computer with a final score of:\n" +
            playerScore + " to " + computerScore);  
      } else {
        alert("The score is " + playerScore + " to " + computerScore);
      }
    });
  });
}

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
    roundCount += 1;
    return "It's a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore += 1;
    roundCount += 1;
    return "Paper beats Rock.  You lose!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore += 1;
    roundCount += 1;
    return "Rock beats Scissors.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore += 1;
    roundCount += 1;
    return "Paper beats Rock.  You win!";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    roundCount += 1;
    return "It's a tie!";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore += 1;
    roundCount += 1;
    return "Scissors beats Paper. You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore += 1;
    roundCount += 1;
    return "Rock beats Scissors.  You lose!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore += 1;
    roundCount += 1;
    return "Scissors beats Paper. You win!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    roundCount += 1;
    return "It's a tie!";
  } else {
    computerScore += 1;
    roundCount += 1;
    return "You didn't choose a valid answer so you lose by default!" +
        "\n(Double check your spelling!)";
  }
}

buttonSelection();