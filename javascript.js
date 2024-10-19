



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

function playRound(humanChoice,computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Human wins!");
        humanScore ++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Computer wins!");
        computerScore ++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Human wins!");
        humanScore ++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer wins!");
        computerScore ++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Human wins!");
        humanScore ++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer wins!");
        computerScore ++;
    } else {
        console.log("DRAW, no points to anyone.")
    }
}


let computerScore = 0;
let humanScore = 0;


function playGame(){



    playRound(getHumanChoice(), getComputerChoice(options));
    playRound(getHumanChoice(), getComputerChoice(options));
    playRound(getHumanChoice(), getComputerChoice(options));
    playRound(getHumanChoice(), getComputerChoice(options));
    playRound(getHumanChoice(), getComputerChoice(options));

    console.log("Human score:",humanScore);
    console.log("Computer score:",computerScore);

    if (humanScore>computerScore) {
        console.log("Human wins the game!");
    }
    else if (humanScore<computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("DRAW");
    }
}

playGame();

