const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

const pressButton = document.getElementsByClassName("buttons-player");

/*
//Random player selection from array
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

//Random computer selection from array
function computerPlay() {
      return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

let resultBattle;
const scorePlayerArray = [];
const scoreComputerArray = [];
const scoreTie = [];
document.getElementById("end-modal").style.display = "none";


//play function game when player selections a button
for (let i = 0; i < pressButton.length; i++) {
  pressButton[i].addEventListener("click", game);

function game() {

    const playerSelection = pressButton[i].innerHTML.toLowerCase();
    console.log("Player: " + playerSelection);

    const computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

    function playRound(playerSelection, computerSelection) {
      if ((playerSelection === "rock" && (computerSelection === "lizard" || computerSelection === "scissors")) ||
        (playerSelection === "paper" && (computerSelection === "rock" || computerSelection === "spock")) ||
        (playerSelection === "scissors" && (computerSelection === "paper" || computerSelection === "lizard")) ||
        (playerSelection === "lizard" && (computerSelection === "paper" || computerSelection === "spock")) ||
        (playerSelection === "spock" && (computerSelection === "scissors" || computerSelection === "rock"))) {
        resultBattle = "Player Win";
        scorePlayerArray.push("1");
        document.getElementById("result-battle").innerHTML = "Computer choose: " + computerSelection + "<br> You won"
        // alert("Player won");
      } else if (playerSelection === computerSelection) {
        resultBattle = "Exaequo! That was a close one";
        scoreTie.push("1");
        document.getElementById("result-battle").innerHTML = "Computer choose: " + computerSelection + "<br> Exaequo! That was a close one"
        // alert("Exaequo");
      } else {
        resultBattle = "Computer Win";
        scoreComputerArray.push("1");
        document.getElementById("result-battle").innerHTML = "Computer choose: " + computerSelection + "<br> You lost"
        // alert("Compuer won");
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
    document.getElementById("score-player").innerHTML = scorePlayerArray.length;
    document.getElementById("score-bot").innerHTML = scoreComputerArray.length;

    endGame(scorePlayerArray, scoreComputerArray);
  };
};

function endGame () {
  if (scorePlayerArray.length === 5) {
    document.getElementById("end-msg").innerHTML = "YOU WON";
    document.getElementById("end-modal").style.display = "block";
  } else if (scoreComputerArray.length === 5) {
    document.getElementById("end-msg").innerHTML = "GAME OVER"
    document.getElementById("end-modal").style.display = "block";
  } else {
    document.getElementById("end-msg").innerHTML = " "
    document.getElementById("end-modal").style.display = "none";
  }
}

const resetBtn = document.getElementById("reset-btn");

resetBtn.onclick = function resetGame() {
  document.getElementById("score-player").innerHTML = 0;
  document.getElementById("score-bot").innerHTML = 0;
  document.getElementById("end-msg").innerHTML = " ";
  document.getElementById("end-modal").style.display = "none";
  scorePlayerArray.length = 0;
  scoreComputerArray.length = 0;
  scoreTie.length = 0;
}



/*
//play 5 games in a row
for (let i = 0; i < 10; i++) {
  game();
}
*/
