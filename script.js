const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

const pressButton = document.getElementsByClassName("buttons_player");
const pressButtonBot = document.getElementsByClassName("buttons_bot");

/*
//Random player selection
function playerPlay() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
*/
/*
//prompt player selection
    function playerPlay() {
      let playerMessage = prompt("Choose wisely between Rock, Paper, Scissors, Lizard & Spock");
      while (choiceArray.includes(playerMessage.toLowerCase()) === false) {
        playerMessage = prompt("Seems you made a mistake. Rock, Paper, Scissors, Lizard & Spock")
      }
        return playerMessage.toLowerCase();
    }
    const playerSelection = playerPlay();
    console.log("Player: " + playerSelection)
*/

//random computer selection
function computerPlay() {
  return pressButtonBot[Math.floor(Math.random() * pressButtonBot.length)];
}

/*
function computerPlay() {
      return pressButtonBot[Math.floor(Math.random() * pressButtonBot)];
}
*/

let resultBattle;
const scorePlayerArray = [];
const scoreComputerArray = [];
const scoreTie = [];

//play function game when player selections a button
for (let i = 0; i < pressButton.length; i++) {
  pressButton[i].addEventListener("click", game);

function game() {
    const playerSelection = pressButton[i].innerHTML.toLowerCase();
    console.log("Player: " + playerSelection);

    const computerSelection = computerPlay().innerHTML.toLowerCase();
    console.log("Computer: " + computerSelection);

    function playRound(playerSelection, computerSelection) {
      if ((playerSelection === "rock" && (computerSelection === "lizard" || computerSelection === "scissors")) ||
        (playerSelection === "paper" && (computerSelection === "rock" || computerSelection === "spock")) ||
        (playerSelection === "scissors" && (computerSelection === "paper" || computerSelection === "lizard")) ||
        (playerSelection === "lizard" && (computerSelection === "paper" || computerSelection === "spock")) ||
        (playerSelection === "spock" && (computerSelection === "scissors" || computerSelection === "rock"))) {
        resultBattle = "Player Win";
        scorePlayerArray.push("1");
        alert("Player won");
      } else if (playerSelection === computerSelection) {
        resultBattle = "Exaequo! That was a close one";
        scoreTie.push("1");
        alert("Exaequo");
      } else {
        resultBattle = "Computer Win";
        scoreComputerArray.push("1");
        alert("Compuer won");
      };
      return resultBattle;
      return scorePlayerArray;
      return scoreComputerArray;
      return scoreTie;
    };

    console.log(playRound(playerSelection, computerSelection));

    console.log("Player score: " + scorePlayerArray.length);
    console.log("Computer score: " + scoreComputerArray.length);
    console.log("Tie score: " + scoreTie.length);

    console.log(scorePlayerArray);
    console.log(scoreComputerArray);
    document.getElementById("score_player").innerHTML = scorePlayerArray.length;
    document.getElementById("score_bot").innerHTML = scoreComputerArray.length;
  };
};

/*
//play 5 games in a row
for (let i = 0; i < 10; i++) {
  game();
}
*/
