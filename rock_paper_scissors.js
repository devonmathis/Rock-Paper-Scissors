let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let roundDecision;

//let computerSelection = getComputerChoice();

function getComputerChoice(){
    let choices = Math.floor(Math.random() * 3);
    switch(choices){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    //console.log(getComputerChoice);
}

let playerSelection = prompt("rock, paper, or scissors?");
//let computerSelection = getComputerChoice();

function playRound(playerSelection) {
    //let playerSelection = prompt("rock, paper, or scissors?");
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection){
        roundWinner = 'tie';
        roundDecision = "You both chose " + playerSelection + ". It's a tie! Try again.";
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        computerScore++;
        roundWinner = 'computer';
        roundDecision = "You lose... " + playerSelection + " loses to " + computerSelection + ". Choose again!";
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        roundWinner = 'player';
        roundDecision = "You win! " + playerSelection + " beats " + computerSelection + "! Go again?";
    }
        //console.log("You chose " + playerSelection);
        //console.log("The computer chose " + computerSelection);
        //console.log(roundWinner);
        return roundWinner, roundDecision;
}

function game(){
    playRound(playerSelection);
    if (roundWinner === 'tie'){
        console.log(roundDecision);
    }
    else if (roundWinner === 'computer'){
        console.log(roundDecision);
    }
    else if (roundWinner === 'player'){
        console.log(roundDecision);
    }
    //console.log("You chose " + playerSelection);
    //console.log("The computer chose " + `${playRound.computerSelection}`);
    gameOver();
}

function gameOver(){
    if (computerScore === 5){
        console.log("You lost it all. Game over.");
    }
    else if (playerScore === 5){
        console.log("You've won! Rematch?");
    }
}