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

function game(n) {
    let p1_score = 0;
    let p2_score = 0;
    for (let i = 0 ; i < n; ) {
        let p1 = prompt("Rock, Paper, or Scissors")
        console.log(p1);
        console.log(playRound(p1, getComputerChoice()))
        let [results, msg] = playRound(p1, getComputerChoice())
        if (results == 0) {
            alert(msg);
            continue;
        } else if (results == 1) {
            alert(msg)
            p1_score++;
            p2_score++;
        } else if (results == 2) {
            alert(msg);
            p1_score++;
        } else if (result == 3) {
            alert(msg)
            p2_score++;
        }
        i++;
    }
}
