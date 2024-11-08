



const options = ["rock", "paper", "scissors"];

function getComputerChoice(options) {
    let computerChoice = options[(Math.floor(Math.random() * options.length))];
    //console.log("Computer has chosen:",computerChoice);
    computerChoiceDisplay.textContent = ("Computer chose " + computerChoice + "!");
    return computerChoice;
}

// function getHumanChoice() {
//     let humanChoice = prompt("rock, paper, or scissors?");
//     if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
//         console.log("invalid input");
//         getHumanChoice();
//     } else {
//         console.log("Human has chosen:",humanChoice)
//         return humanChoice;
//     }
// }



function displayScore() {
    humanScoreDisplay.textContent = ("Human score: " + humanScore);
    container.appendChild(humanScoreDisplay);
    computerScoreDisplay.textContent = ("Computer score: " + computerScore);
    container.appendChild(computerScoreDisplay);
}



function playRound(humanChoice,computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore ++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore ++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore ++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore ++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;
    } else {

    }

    container.appendChild(humanChoiceDisplay);
    container.appendChild(computerChoiceDisplay);

    console.log(rounds);

    displayScore();

    if (rounds>3) {
        rock = document.getElementById("rock").disabled = true;
        paper = document.getElementById("paper").disabled = true;
        scissors = document.getElementById("scissors").disabled = true;

        return displayFinalScore();
    }

    

    
    
}


let computerScore = 0;
let humanScore = 0;

function displayFinalScore() {

    if (humanScore>computerScore) {
        results.textContent = ("Human wins!");
    }
    else if (humanScore<computerScore) {
        results.textContent = ("Computer wins!");
    } else {
        results.textContent = ("DRAW, we all win!");
    }

    container.appendChild(results);
    
}
