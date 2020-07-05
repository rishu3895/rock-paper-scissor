
function computerPlay() {
    let myNum = Math.random();
    myNum = (Math.floor(myNum * 10)) % 3
    switch (myNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return 'it\'s a draw';
    }
    else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            return 'you win, paper defeats rock';
        }
        else {
            return 'you lose, rock defeats scissor';
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            return 'you lose, paper defeats rock';
        } else {
            return 'you win, scissor defeats paper';
        }
    }
    else if (computerSelection == 'scissor') {
        if (playerSelection == 'rock') {
            return 'you win, rock defeats scissor';
        } else {
            return 'you lose, scissor defeats paper';
        }
    }
}
let output_computer = document.querySelector('.output-box');
let output = document.querySelector('.output-result');

document.getElementById('rock').onclick=function()
{
    console.log('my statement is executing by line1');
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    output_computer.textContent = computerSelection;
    output.textContent = playRound(playerSelection, computerSelection);
};
document.getElementById('paper').onclick=function(){
    console.log('my statement is executing by line2');
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    output_computer.textContent = computerSelection;
    output.textContent = playRound(playerSelection, computerSelection);
};
document.getElementById('scissor').onclick=function(){
    console.log('my statement is executing by line3');
    let playerSelection = 'scissor';
    let computerSelection = computerPlay();
    output_computer.textContent = computerSelection;
    output.textContent = playRound(playerSelection, computerSelection);
};
