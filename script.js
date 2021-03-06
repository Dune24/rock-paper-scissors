let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

buttons.forEach(button => {
    button.addEventListener('click', e => {
          if (button.id === 'rock') {
              container.textContent = playRound(`Rock`);
              score.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
              winner.textContent = '';
              winnerCheck();
          } else if (button.id === 'paper') {
              container.textContent = playRound(`Paper`);
              score.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
              winner.textContent = '';
              winnerCheck();
          } else if (button.id === 'scissors') {
              container.textContent = playRound(`Scissors`);
              score.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;
              winner.textContent = '';
              winnerCheck();
          }
        })
    });

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
    //playerSelection = transformPlayerString(playerSelection);
    
    
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
        winner.textContent = `You win!`;
        resetScore();
    } else if (computerScore == 5) {
        winner.textContent = `Computer wins!`;
        resetScore();
    }
}

/*
function game() {
    //let playerChoice = prompt(`Rock, Paper or Scissors?`);
    console.log(playRound(playerChoice));
    console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    //winnerCheck();
}


let rock = document.querySelector('#rock');
rock.addEventListener('click', function(){
    console.log(playRound(`Rock`));
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', function(){
    console.log(playRound(`Paper`));
});
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){
    console.log(playRound(`Scissors`));
});
*/
