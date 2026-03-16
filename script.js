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

function applyScore(gameResult) {
  if (gameResult === "Win") {
    humanScore++;
  } else if (gameResult === "Lose") {
    computerScore++;
  }
}

function playRound() {
  const computerChoice = getComputerChoice().toLowerCase();
  const humanChoice = getHumanChoice().toLowerCase();

  const gameResult = decisionResult(computerChoice, humanChoice);

  applyScore(gameResult);

  console.log(`${gameResult} => player: ${humanChoice}, computer: ${computerChoice}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Player: ${humanScore}, Computer: ${computerScore}\n`);
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();