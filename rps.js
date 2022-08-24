function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let randomChoice = Math.floor(Math.random() * 10)%3
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let win = {"rock": "scissor",
                "scissor": "paper",
                "paper":"rock"}
    playerSelection = playerSelection.toLowerCase()

    if (!Object.keys(win).includes(playerSelection)) {
        return [0, "That's not a option, please use 'rock', 'paper', or 'scissor'"];
    }
    if (playerSelection == computerSelection) {
        return [1,"Tie!"];
    }
    if (win[playerSelection] == computerSelection)
        return [2, `You win! ${playerSelection} beats ${computerSelection}`];
    else {
        return [3, `You lose! ${computerSelection} beats ${playerSelection}`];
    }    
  }

