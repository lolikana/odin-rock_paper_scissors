const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

function game() {

    function playerPlay() {
      return choiceArray[Math.floor(Math.random() * choiceArray.length)];
    }
    const playerSelection = playerPlay();
    console.log("Player: " + playerSelection);

  /*
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

    function computerPlay() {
      return choiceArray[Math.floor(Math.random() * choiceArray.length)];
    }
    const computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

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
   console.log(playRound(playerSelection, computerSelection));
}


for (let i = 0; i < 5; i++) {
  game();
}
