
let computerScore = 0;
let humanScore = 0;


const options = ["rock", "paper", "scissors"];

function getComputerChoice(options) {
    let computerChoice = options[(Math.floor(Math.random() * options.length))];
    console.log("Computer has chosen:",computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
        console.log("invalid input");
        getHumanChoice();
    } else {
        console.log("Human has chosen:",humanChoice)
        return humanChoice;
    }
}

getComputerChoice(options);
getHumanChoice();