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

function getEmote(tool){
    if (tool == "rock")
        return "✊";
    else if ( tool == "paper")
        return "🖐️";
    else
        return "✌";
};

var roundCounter = 1;
var playerScore = 0;
var computerScore = 0;

const scores = document.querySelector('#scores');
const results = document.querySelector('#results');

const human = document.querySelector('#hum');
const computer = document.querySelector('#comp');

const compChoice = document.querySelector('#compChoice');
const humChoice = document.querySelector('#HumChoice');

const buttons = document.querySelector('#buttons');

refresh = document.createElement("button");
refresh.textContent = "Play Again?";
refresh.setAttribute('onClick', "document.location.reload(true)");
refresh.style = "padding: 2% 5%;";

function playRound(choice){
    playerChoice = choice;
    let computerChoice = getComputerChoice();
    if (playerScore == 5){
        results.innerHTML = "<h2>🎊 YOU WON! Humans will live to see another day! 🎊</h2>";
        human.innerHTML = '😃';
        computer.innerHTML = '🖱️';
        results.style.color = "rgba(7, 7, 7, 0.882);";
        results.style.fontFamily = "HUMAN2";
        compChoice.innerHTML = '';
        humChoice.innerHTML = '';
        buttons.innerHTML = '';
        buttons.appendChild(refresh);
        lockGame();
    } else if ( computerScore == 5){
        results.innerHTML = "<h2>💀 YOU LOST! COMPUTERS WILL DESTROY THE WORLD! 💀</h2>";
        human.innerHTML = '☠️';
        computer.innerHTML = '🤖🦾';
        results.style.color = "rgba(7, 7, 7, 0.882);";
        results.style.fontFamily = "BLOOD";
        compChoice.innerHTML = '';
        humChoice.innerHTML = '';
        buttons.innerHTML = '';
        buttons.appendChild(refresh);
        lockGame();
    } else if (playerChoice == computerChoice){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        return `❌ It's a tie! You both chose ${playerChoice} ❌`;
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        playerScore ++;
        human.innerHTML = `😐 Human : ${playerScore}`;
        return "🎉 You won! Rock beats Scissors 😃";
    } else if (computerChoice == "rock" && playerChoice == "scissors"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        computerScore ++;
        computer.innerHTML = `🤖 Computer : ${computerScore}`;
        return "🖥️ You lost! Rock beats Scissors 😱";
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        playerScore ++;
        human.innerHTML = `😐 Human : ${playerScore}`;
        return "🎉 You won! Paper beats Rock 😃";
    } else if (computerChoice == "paper" && playerChoice == "rock"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        computerScore ++;
        computer.innerHTML = `🤖 Computer : ${computerScore}`;
        return "🖥️ You lost! Paper beats Rock 😱";
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        playerScore ++;
        human.innerHTML = `😐 Human : ${playerScore}`;
        return "🎉 You won! Scissors beats Pape 😃";
    } else if (computerChoice == "scissors" && playerChoice == "paper"){
        compChoice.textContent = getEmote(computerChoice);
        humChoice.textContent = getEmote(playerChoice);
        computerScore ++;
        computer.innerHTML = `🤖 Computer : ${computerScore}`;
        return "🖥️ You lost! Scissors beats Paper 😱";
    } else {
        compChoice.textContent = '';
        humChoice.textContent = '';
        return `error! please enter a valid input: -> ${playRound()}`;
    };
};


const btn_rock = document.querySelector('#btnRock');
const btn_paper = document.querySelector('#btnPaper');
const btn_scissors = document.querySelector('#btnScissors');

btn_rock.addEventListener('click', () => {
    results.innerHTML = `Round ${roundCounter}:<strong> ${playRound("rock")}</strong>`;
    roundCounter ++;
});
btn_paper.addEventListener('click', () => {
    results.innerHTML = `Round ${roundCounter}:<strong> ${playRound("paper")}</strong>`;
    roundCounter ++;
});
btn_scissors.addEventListener('click', () => {
    results.innerHTML = `Round ${roundCounter}:<strong> ${playRound("scissors")}</strong>`;
    roundCounter ++;
});

function lockGame(){
    btn_rock.removeEventListener('click');
    btn_paper.removeEventListener('click');
    btn_scissors.removeEventListener('click');
};