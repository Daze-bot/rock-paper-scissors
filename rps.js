let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let results = document.querySelector('.results');
let roundResult = document.querySelector('.roundResult');
let scoreboard = document.querySelector('.scoreboard');
let gameStartBtn = document.querySelector('#gameStart');
let choiceText = document.querySelector('.chooseButton');
let buttonsContainer = document.querySelector('.buttonsContainer');
let playerChoice = document.querySelector('#playerChoice');
let computerChoice = document.querySelector('#computerChoice');
let outcome = document.querySelector('#outcome');
let scoreDisplay = document.querySelector('#score');
let finalScore = document.querySelector('#finalScore');

function playGame() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  outcome.textContent = "";
  scoreDisplay.textContent = "";
  finalScore.textContent = "";
  addStartText();
  addButtons();
  buttonSelection();
}

function buttonSelection() {
  let buttons = document.querySelectorAll('.button');
  buttons.forEach((press) => {
    press.addEventListener('click', () => {
      let playerSelectionInput = press.textContent;
      let playerSelection = playerSelectionInput.toUpperCase();
      let computerSelection = computerPlay();
      choiceText.textContent = "Round " + (roundCount + 2) + " of 5.  Make your next pick!"
      if (roundCount <= 5) {
        playerChoice.textContent = "You chose: " + playerSelection;
        computerChoice.textContent = "The computer chose: " + computerSelection;
        outcome.textContent = playRound(playerSelection, computerSelection);
      }
      if (roundCount === 5 && playerScore > computerScore) {
        scoreDisplay.textContent = "";
        finalScore.textContent = "After 5 rounds of play...You beat the computer with a final score of: " +
            playerScore + " to " + computerScore;
        playerScore = 0;
        computerScore = 0;  
        roundCount += 1;
        choiceText.textContent = "Game Over! Press 'New Game' to play again";
      } else if (roundCount === 5 && playerScore < computerScore) {
        scoreDisplay.textContent = "";
        finalScore.textContent = "After 5 rounds of play...You lost to the computer with a final score of: " +
            playerScore + " to " + computerScore;
        playerScore = 0;
        computerScore = 0;
        roundCount += 1;
        choiceText.textContent = "Game Over! Press 'New Game' to play again";
      } else if (roundCount === 5 && playerScore === computerScore) {
        scoreDisplay.textContent = "";
        finalScore.textContent = "After 5 rounds of play...You tied the computer with a final score of: " +
            playerScore + " to " + computerScore;  
        playerScore = 0;
        computerScore = 0;
        roundCount += 1;
        choiceText.textContent = "Game Over! Press 'New Game' to play again";
      } else if (roundCount < 5) {
        scoreDisplay.textContent = "The score is " + playerScore + " to " + computerScore;
      } else if (roundCount > 5) {
        choiceText.textContent = "Game Over! Press 'New Game' to play again";
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
  if (playerSelection === computerSelection) {
    roundCount += 1;
    return "This round is a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore += 1;
    roundCount += 1;
    return "Paper beats Rock.  You lose this round!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore += 1;
    roundCount += 1;
    return "Rock beats Scissors.  You win this round!";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore += 1;
    roundCount += 1;
    return "Paper beats Rock.  You win this round!";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore += 1;
    roundCount += 1;
    return "Scissors beats Paper. You lose this round!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore += 1;
    roundCount += 1;
    return "Rock beats Scissors.  You lose this round!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore += 1;
    roundCount += 1;
    return "Scissors beats Paper. You win this round!";
  } 
}

function addButtons() {
  while (buttonsContainer.hasChildNodes()) {
    buttonsContainer.removeChild(buttonsContainer.lastChild);
  }

  let rockBtn = document.createElement('button');
  let paperBtn = document.createElement('button');
  let scissorsBtn = document.createElement('button');

  rockBtn.setAttribute('id', "rock");
  rockBtn.classList.add("button");
  rockBtn.textContent = "Rock";
  paperBtn.setAttribute('id', "rock");
  paperBtn.classList.add("button");
  paperBtn.textContent = "Paper";
  scissorsBtn.setAttribute('id', "rock");
  scissorsBtn.classList.add("button");
  scissorsBtn.textContent = "Scissors";

  buttonsContainer.appendChild(rockBtn);
  buttonsContainer.appendChild(paperBtn);
  buttonsContainer.appendChild(scissorsBtn);
}

function addStartText() {
  choiceText.textContent = `Round 1 of 5. Make your selection below!`
}

gameStartBtn.addEventListener('click', playGame);