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

function playRound(playerSelection) {
    let p2 = computerPlay().toLowerCase();
    let p1 = playerSelection.toLowerCase();

    let result = 'helo'
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
  }

const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
    button.addEventListener('click',function(){
        alert(playRound(button.value));
    })
})