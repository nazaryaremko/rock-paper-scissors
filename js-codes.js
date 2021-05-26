function computerPlay() {
    let num = Math.random();
    if (num < 0.333) {
        return "Rock";
    } else if (num > 0.333 && num < 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    p1 = playerSelection.toLowerCase();
    p2 = computerSelection.toLowerCase();
    if (p1 === "rock" && p2 === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (p1 === "rock" && p2 === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (p1 === "rock" && p2 === "rock") {
        return "Draw! You both picked rock!";
    }
    else if (p1 === "rock" && p2 === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (p1 === "paper" && p2 === "scissors") {
        return "You Lose! Rock beats Scissors";
    }
    else if (p1 === "paper" && p2 === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (p1 === "paper" && p2 === "paper") {
        return "Draw! You both picked paper!";
    }
    else if (p1 === "scissors" && p2 === "rock") {
        return "You Lose! Rock beats scissors";
    }
    else if (p1 === "scissors" && p2 === "paper") {
        return "You Win! Scissors beat paper!";
    }
    else if (p1 === "scissors" && p2 === "scissors") {
        return "Draw! You both picked scissors!";
    }
    else {
        return "Please input a valid weapon (rock, paper of scissors)"
    }
  }


function game() {
    let i;
    let me = 0;
    let comp = 0;
    for (i=0; i < 5; i++) {
        const playerSelection = prompt("What is your weapon?");
        const computerSelection = computerPlay();
        gm = playRound(playerSelection, computerSelection)
        if (gm.substring(0,5) === "You W") {
            me ++;
            console.log(gm);
        }
        else if (gm.substring(0,5) === "You L") {
            comp ++;
            console.log(gm);
        }
        else if (gm.substring(0,5) === "Draw!") {
            me ++;
            comp ++;
            console.log(gm);
        }
        else {
            console.log(gm);
        }
    }
    if (me > comp){
        return "Congratulations! You won with a score: "+me+":"+comp;
    }
    else if (me < comp){
        return "I'm sorry! You lost with a score: "+me+":"+comp;
    }
    else {
        return "It's a draw! You each got "+me+" points";
    }
}