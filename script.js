function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  }
  if (choice == 1) {
    return "paper";
  }
  if (choice == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock? Paper? Scissors?");
}

function decisionResult(computerChoice, humanChoice) {
  let gameResult;

  if (computerChoice === "rock") {
    if (humanChoice === "rock") {
      gameResult = "Draw";
    } else if (humanChoice === "paper") {
      gameResult = "Win";
    } else if (humanChoice === "scissors") {
      gameResult = "Lose";
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      gameResult = "Lose";
    } else if (humanChoice === "paper") {
      gameResult = "Draw";
    } else if (humanChoice === "scissors") {
      gameResult = "Win";
    }
  } else if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      gameResult = "Win";
    } else if (humanChoice === "paper") {
      gameResult = "Lose";
    } else if (humanChoice === "scissors") {
      gameResult = "Draw";
    }
  }
  
  return gameResult;
}

function printScores() {
  playerScoreDiv.textContent = `Player Score: ${humanScore}`;
  computerScoreDiv.textContent = `Computer Score ${computerScore}`;
}

function printGameResult() {
  let result;
  if (humanScore > computerScore) {
    result = "플레이어 승!";
  } else {
    result = "컴퓨터 승!";
  }
  gameResultDiv.textContent = result;
}

function applyScore(gameResult) {
  if (gameResult === "Win") {
    humanScore++;
  } else if (gameResult === "Lose") {
    computerScore++;
  }

  if (humanScore == 5 || computerScore == 5) {
    printGameResult();
  }

  printScores();
}

function playRound(playerSelection) {
  const computerChoice = getComputerChoice().toLowerCase();
  const humanChoice = playerSelection;

  const gameResult = decisionResult(computerChoice, humanChoice);

  applyScore(gameResult);

  roundResultDiv.textContent = `${gameResult} => player: ${humanChoice}, computer: ${computerChoice}`;
}

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const roundResultDiv = document.querySelector(".round-result");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
const gameResultDiv = document.querySelector(".game-result");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

let humanScore = 0;
let computerScore = 0;
