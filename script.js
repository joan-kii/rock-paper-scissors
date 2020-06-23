function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

        beats.textContent = '';
        if (playerSelection == computerSelection) {
            beats.textContent =`It's a tie! Play again.`;
            winner.textContent = `You ${yourScore}, Me ${computerScore}.`;

        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
            (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
            yourScore++
            beats.textContent = `Yes! ${playerSelection} beats ${computerSelection}.`;
            winner.textContent = `You ${yourScore}, Me ${computerScore}.`;

        } else {
            computerScore++
            beats.textContent = `Ouch... ${computerSelection} beats ${playerSelection}.`;
            winner.textContent = `You ${yourScore}, Me ${computerScore}.`;
            }

        if (yourScore == 5 || computerScore == 5) {
            beats.textContent = '';
            if (yourScore > computerScore) {
                winner.textContent = `You win!!! ${yourScore} to ${computerScore}.`;
            } else { 
                winner.textContent = `You lose... ${yourScore} to ${computerScore}.`;
            } 
            setTimeout(resetGame, 1500);
        } 
        return null
}

function resetGame() {
    let playAgain = confirm('Do you want to play again?');
    if (playAgain == true) {
        yourScore = 0;
        computerScore = 0;
    } else {
        winner.textContent = 'Ok. See you soon!';
        yourScore = 0;
        computerScore = 0;
    }
}

let yourScore = 0;
let computerScore = 0;

const playArea = document.querySelector('#playArea');
const beats = document.createElement('div');
beats.classList.add('div');
playArea.appendChild(beats);

const winner = document.createElement('div');
winner.classList.add('div');
playArea.appendChild(winner);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    const playerSelection = button.dataset.selection;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    })
});


