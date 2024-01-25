let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let roundDecision;

function getComputerChoice() {
    let choices = Math.floor(Math.random() * 3);
    switch (choices) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    //let playerSelection;
    //let computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
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
    return roundWinner, roundDecision;
}

function gameOver(){
    return playerScore == 5 || computerScore == 5;
}

//UI

const scoreInfo = document.querySelector('.scoreBox');
const playerScorePara = document.querySelector('.playerScore');
const computerScorePara = document.querySelector('.computerScore');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerSelection){
    if (gameOver()){
        //insert logic for the game over screen
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (gameOver()){
        //insert logic for the game over screen
    }
}

function updateChoices(){ 
    switch (playerSelection){
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
    }
}

function updateScore(){
    if(roundWinner == 'tie'){
        //
    }
    else if(roundWinner == 'player'){
        //
    }
    else if(roundWinner == 'computer'){
        //
    }
}

/*const weapons = document.querySelectorAll('.weaponArena');
weapons.forEach((weapons) =>
    weapons.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
    })
);*/
