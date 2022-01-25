/*
IF Player = ROCK AND Computer = LIZARD OR Computer = SCISSORS,
   Player = PAPER AND Computer = ROCK or Computer = SPOCK,
   Player = SCISSORS AND Computer = PAPER or Computer = LIZARD,
   Player = LIZARD AND Computer = PAPER or Computer = SPOCK,
   Player = SPOCK AND Computer = SCISSORS or Computer = ROCK;
   > RESULT  "Player win";
             Player score +1

  ELSE IF Player === Computer
   > RESULT "Tie match";

  ELSE
   > RESULT "Computer win";
            Computer score +1;

IF Player SCORE === 5
   > RESULT SHOW message "YOU WIN" with button "Try Again";
  ELSE IF Computer SCORE === 5
   > RESULT SHOW message  "COMPUTER WIN" with button "Try Again";
   ELSE
   > ... continue game

*/

const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

function playRound() {
  let resultBattle;
    if ((playerSelection === "rock" && (computerSelection === "lizard" || computerSelection === "scissors"))
        || (playerSelection === "paper" && (computerSelection === "rock" || computerSelection === "spock"))
        || (playerSelection === "scissors" && (computerSelection === "paper" || computerSelection === "lizard"))
        || (playerSelection === "lizard" && (computerSelection === "paper" || computerSelection === "spock"))
        || (playerSelection === "spock" && (computerSelection === "scissors" || computerSelection === "rock"))) {
      resultBattle = "Player Win";
    } else if (playerSelection === computerSelection) {
      resultBattle = "Ex aequo! Close one";
    } else {
      resultBattle = "Computer Win";
    };
 return resultBattle;
}

function playerPlay() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
console.log(playerPlay());
const playerSelection = playerPlay();

function computerPlay() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
console.log(computerPlay());
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))
