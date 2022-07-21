function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100);
    if (rand <= 33){
        return "rock";
    } else if (rand <= 66){
        return "paper";
    } else if (rand <= 99){
        return "scissors";
    }
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice == computerChoice){
        return "It's a tie! You both chose the same"
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return "You won! Rock beats Scissors"
    } else if (computerChoice == "rock" && playerChoice == "scissors"){
        return "You lost! Rock beats Scissors"
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        return "You won! Paper beats Rock"
    } else if (computerChoice == "paper" && playerChoice == "rock"){
        return "You lost! Paper beats Rock"
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "You won! Scissors beats Paper"
    } else if (computerChoice == "scissors" && playerChoice == "paper"){
        return "You lost! Scissors beats Paper"
    } else {
        return "error!"
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));