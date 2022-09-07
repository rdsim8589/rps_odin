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

function scoreTracker(results) {
    if (results == 1) {
        return [0, 0];
    } else if (results == 2) {
        return [1, 0];
    } else if (results == 3) {
        return [0, 1];
    }
    return
}


function gameStart() {
    let p1Score = 0;
    let p2Score = 0;
    const playerOptions = document.querySelectorAll("button");

    playerOptions.forEach(e => {
        e.addEventListener("click", () => {
            // remove the div that was added with unique class
            const remove = document.querySelector(".results");
            if (remove) { remove.remove(); }

            const value = e.attributes.getNamedItem("data-choice").value;
            const [results, msg] = playRound(value, getComputerChoice());

            // check score
            const [p1, p2] = scoreTracker(results);
            p1Score += p1;
            p2Score += p2;
            console.log(`${p1Score}, ${p2Score}`);

            // update DOM withs score
            const player = document.querySelector("#player p");
            const computer = document.querySelector("#computer p")
            player.innerHTML = p1Score;
            computer.innerHTML = p2Score;

            // add div with resilts
            if (p1Score == 5 || p2Score == 5) {
                const parent = document.querySelector("body");
                const result = document.createElement("div");
                result.classList.add("results");
                result.textContent = `${results}, ${msg}`
                parent.appendChild(result)
                p1Score = 0;
                p2Score = 0;
            }
        });
    });    
}
gameStart();
