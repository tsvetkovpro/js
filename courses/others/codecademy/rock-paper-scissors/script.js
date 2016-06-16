var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {        
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock wins";
        } else  if (choice2 === "paper") {
            return "Paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins";
        } else if (choice2 === "scissors") {
            return "Scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock wins";
        } else if (choice2 === "paper") {
            return "Scissors wins";
        }
    }
}

compare(userChoice , computerChoice );