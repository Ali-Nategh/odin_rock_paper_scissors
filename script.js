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

function playRound(choice){
    playerChoice = choice;
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice){
        return `It's a tie! You both chose ${playerChoice}`;
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return "You won! Rock beats Scissors";
    } else if (computerChoice == "rock" && playerChoice == "scissors"){
        return "You lost! Rock beats Scissors";
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        return "You won! Paper beats Rock";
    } else if (computerChoice == "paper" && playerChoice == "rock"){
        return "You lost! Paper beats Rock";
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "You won! Scissors beats Paper";
    } else if (computerChoice == "scissors" && playerChoice == "paper"){
        return "You lost! Scissors beats Paper";
    } else {
        return `error! please enter a valid input: -> ${playRound()}`;
    };
};

function game(){
        console.log(playRound());
}

const btn_rock = document.querySelector('#btnRock');
const btn_paper = document.querySelector('#btnPaper');
const btn_scissors = document.querySelector('#btnScissors');

btn_rock.addEventListener('click', () => {
    console.log(playRound("rock"));
});
btn_paper.addEventListener('click', () => {
    console.log(playRound("paper"));
});
btn_scissors.addEventListener('click', () => {
    console.log(playRound("scissors"));
});

// game()