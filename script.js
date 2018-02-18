let playerScore = 0;
let computerScore = 0;

function transformPlayerString(str) {
    let newStr = str.toLowerCase();
    
    return newStr[0].toUpperCase() + newStr.slice(1);
}
    
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    
    return (random == 1) ? `Rock` :
           (random == 2) ? `Paper` : `Scissors`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    playerSelection = transformPlayerString(playerSelection);
    
    
    if (playerSelection == `Rock` && computerSelection == `Paper`) {
        computerScore++;
        return `You Lose! Paper beats Rock`;
    } else if (playerSelection == `Rock` && computerSelection == `Scissors`) {
        playerScore++;
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection == `Paper` && computerSelection == `Rock`) {
        playerScore++;
        return `You Win! Paper beats Rock`;
    } else if (playerSelection == `Paper` && computerSelection == `Scissors`) {
        computerScore++;
        return `You Lose! Scissors beats Paper`;
    } else if (playerSelection == `Scissors` && computerSelection == `Rock`) {
        computerScore++;
        return `You Lose! Rock beats Scissors`;
    } else if (playerSelection == `Scissors` && computerSelection == `Paper`) {
        playerScore++;
        return `You Win! Scissors beats Paper`;
    } else {
        return `Draw! Both players have ${playerSelection}!`;
    }
    
}

function winnerCheck() {
    if (playerScore == 5) {
        console.log(`The player is the winner!`);
        resetScore();
    } else if (computerScore == 5) {
        console.log(`The computer is the winner!`);
        resetScore();
    }
}

function game() {
    let playerChoice = prompt(`Rock, Paper or Scissors?`);
    console.log(playRound(playerChoice));
    console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    winnerCheck();
}


