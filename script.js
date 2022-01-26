const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

function playRound(playerSelection, computerSelection) {
  let resultBattle;
    if (playerSelection === "rock" && (computerSelection === "lizard" || computerSelection === "scissors")) {
      resultBattle = "Player Win";
    } else if (playerSelection === "paper" && (computerSelection === "rock" || computerSelection === "spock")) {
      resultBattle = "Player Win";
    } else if (playerSelection === "scissors" && (computerSelection === "paper" || computerSelection === "lizard")) {
      resultBattle = "Player Win";
    } else if (playerSelection === "lizard" && (computerSelection === "paper" || computerSelection === "spock")) {
      resultBattle = "Player Win";
    } else if (playerSelection === "spock" && (computerSelection === "scissors" || computerSelection === "rock")) {
      resultBattle = "Player Win";
    } else if (playerSelection === computerSelection) {
      resultBattle = "Exaequo! That was a close one";
    } else {
      resultBattle = "Computer Win";
    };
 return resultBattle;
}

function playerPlay() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
const playerSelection = playerPlay();
console.log("Player: " + playerSelection);

function computerPlay() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
const computerSelection = computerPlay();
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
