function getComputerChoice() {
  let choice = Math.floor(Math.random() * 2);
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