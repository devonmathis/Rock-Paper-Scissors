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
        roundDecision = "It's a tie! Go again.";
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        computerScore++;
        roundWinner = 'computer';
        roundDecision = "You lose this one. Go again!";
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        roundWinner = 'player';
        roundDecision = "You win this one! Go again.";
    }
    return roundWinner, roundDecision;
}

function gameOver() {
    return playerScore == 5 || computerScore == 5;
}

//UI

const scoreInfo = document.querySelector('.scoreboardMessage');
scoreInfo.textContent = "Best of 5 battle";
const playerScorePara = document.querySelector('.playerScore');
const computerScorePara = document.querySelector('.computerScore');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerSign = document.querySelector('.playerSign');
const computerSign = document.querySelector('.computerSign');
const restartBtn = document.querySelector('.restartBtn');
const endGameModal = document.querySelector('.modal');
const endGameMessage = document.querySelector('.modalMessage');
const overlay = document.querySelector('.overlay');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndGameModal);

function handleClick(playerSelection) {
    if (gameOver()) {
        openEndGameModal();
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (gameOver()) {
        restartGame();
        setFinalMessage();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = 'You chose rock';
        case 'paper':
            playerSign.textContent = 'You chose paper';
        case 'scissors':
            playerSign.textContent = 'You chose scissors';
    }

    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = 'Computer chose rock';
        case 'paper':
            computerSign.textContent = 'Computer chose paper';
        case 'scissors':
            computerSign.textContent = 'Computer chose scissors';
    }
}

function updateScore() {
    if (roundWinner == 'tie') {
        scoreInfo.textContent = roundDecision;
    }
    else if (roundWinner == 'player') {
        scoreInfo.textContent = roundDecision;
    }
    else if (roundWinner == 'computer') {
        scoreInfo.textContent = roundDecision;
    }
    playerScorePara.textContent = "Player: " + `${playerScore}`;
    computerScorePara.textContent = "Computer: " + `${computerScore}`;
}

function openEndGameModal() {
    endGameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndGameModal() {
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo = 'Best of 5 battle';
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    playerSign.textContent = '';
    computerSign.textContent = '';
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}
