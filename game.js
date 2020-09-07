let choices = ["rock", "paper", "scissors"]; //The moves you and the computer can make.
let playerScore = 0
let computerScore = 0

function promptPlayer() { //Make the player enter their move for their round.
  let playerSelection = prompt(`Round ${i + 1} of 5. Enter one of these moves: rock, paper, or scissors.`).toLowerCase();
  while (!choices.includes(playerSelection)) { //Keep asking the player for a move until it is valid.
    console.log("Not a valid move!")
    playerSelection = prompt(`Round ${i + 1} of 5. Enter one of these moves: rock, paper, or scissors.`).toLowerCase();
  }
  return playerSelection;
}

function computerPlay() { //Return a random move
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; //Choose a random value from the choices array to be the computer`s move.
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if ( //Player win
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return `You win because ${playerSelection} beats ${computerSelection}. Score is currently ${playerScore} to ${computerScore}.`;
  } else if ( //Computer win
    (playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    return `The computer wins because ${computerSelection} beats ${playerSelection}. Score is currently ${playerScore} to ${computerScore}.`;
  }  else { //Tie
    return `Tie! Both players chose ${playerSelection}. Score is currently ${playerScore} to ${computerScore}.`;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = promptPlayer();
    const computerSelection = computerPlay(); //Decide the computer's move
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) { //Player wins the game
    return `You win the game! The final score was ${playerScore} to ${computerScore}, so you beat the computer by ${playerScore - computerScore}.`;
  } else if (playerScore < computerScore) { //Computer wins the game
    return `You lost... The final score was ${playerScore} to ${computerScore}, so the computer beat you by ${computerScore - playerScore}.`;
  } else { //Draw
    return `The game was a draw. The final score was ${playerScore} to ${computerScore}, so it was tied at ${playerScore}.`;
  }
}

console.log(game());