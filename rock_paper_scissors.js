let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    console.log(getComputerChoice);
}

let playerSelection = 'rock';
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection){
        roundWinner = 'tie';
    }
    if (computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock') {
        roundWinner = 'computer';
       }
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinner = 'player';
       }
        console.log("You chose " + playerSelection);
        console.log("The computer chose " + computerSelection);
        console.log(roundWinner);
}

function game(){
    if (roundWinner == 'tie'){
        console.log()
    }
}

/*let playerSelection = 'rock';
let computerSelection = getComputerChoice();*/