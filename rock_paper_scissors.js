let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

let playerSelection = prompt("rock, paper, or scissors?");
//let computerSelection = getComputerChoice();

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection){
        roundWinner = 'tie';
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        computerScore++;
        roundWinner = 'computer';
       }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        roundWinner = 'player';
       }
        //console.log("You chose " + playerSelection);
        //console.log("The computer chose " + computerSelection);
        //console.log(roundWinner);
        //return roundWinner;
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    //console.log(getComputerChoice);
}

function game(){
    playRound(playerSelection);
    if (roundWinner === 'tie'){
        console.log("You both chose " + playerSelection + ". It's a tie! Try again.");
    }
    else if (roundWinner === 'computer'){
        console.log("You lose... " + playerSelection + " loses to " + getComputerChoice() + ". Choose again!");
    }
    else if (roundWinner === 'player'){
        console.log("You win! " + playerSelection + " beats " + getComputerChoice() + "! Double down?");
    }
    console.log("You chose " + playerSelection);
    console.log("The computer chose " + getComputerChoice());
    gameOver();
}

function gameOver(){
    if (computerScore === 5){
        console.log("You lose. Game over.");
    }
    else if (playerScore === 5){
        console.log("You've won! Rematch?");
    }
}