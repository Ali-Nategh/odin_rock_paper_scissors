function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100);
    if (rand <= 33){
        return "rock";
    } else if (rand <= 66){
        return "paper";
    } else if (rand <= 99){
        return "scissors";
    };
};

var roundCounter = 1
var playerScore = 0
var computerScore = 0
const scores = document.querySelector('#scores')
const results = document.querySelector('#results')

function playRound(choice){
    playerChoice = choice;
    let computerChoice = getComputerChoice();
    if (playerScore == 5){
        results.innerHTML = "YOU WON THE GAME! CONGRATS!"
        lockGame()
    } else if ( computerScore == 5){
        results.innerHTML = "YOU LOST THE GAME! COMPUTERS WILL DESTROY THE WORLD"
        lockGame()
    } else if (playerChoice == computerChoice){
        return `It's a tie! You both chose ${playerChoice}`;
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        playerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You won! Rock beats Scissors";
    } else if (computerChoice == "rock" && playerChoice == "scissors"){
        computerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You lost! Rock beats Scissors";
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        playerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You won! Paper beats Rock";
    } else if (computerChoice == "paper" && playerChoice == "rock"){
        computerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You lost! Paper beats Rock";
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        playerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You won! Scissors beats Paper";
    } else if (computerChoice == "scissors" && playerChoice == "paper"){
        computerScore ++
        scores.innerHTML = `Computer: ${computerScore} <br> Human: ${playerScore}`
        return "You lost! Scissors beats Paper";
    } else {
        return `error! please enter a valid input: -> ${playRound()}`;
    };
};


const btn_rock = document.querySelector('#btnRock');
const btn_paper = document.querySelector('#btnPaper');
const btn_scissors = document.querySelector('#btnScissors');

btn_rock.addEventListener('click', () => {
    results.innerHTML += `Round ${roundCounter}: ${playRound("rock")} <br>`;
    roundCounter ++;
});
btn_paper.addEventListener('click', () => {
    results.innerHTML += `Round ${roundCounter}: ${playRound("paper")} <br>`;
    roundCounter ++;
});
btn_scissors.addEventListener('click', () => {
    results.innerHTML += `Round ${roundCounter}: ${playRound("scissors")} <br>`;
    roundCounter ++;
});

function lockGame(){
    btn_rock.removeEventListener('click')
    btn_paper.removeEventListener('click')
    btn_scissors.removeEventListener('click')
}