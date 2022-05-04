var ai = undefined;
var pc = undefined;
var choice = undefined;
var opponent = undefined;
var winner = undefined;

function winnerWinner() {
    if (ai == 3 && pc == 1) {
        winner = "You"
    }
    else if (ai == 1 && pc == 3) {
        winner = "I"
    }
    else if (ai > pc) {
        winner = "I"
    }
    else if (pc > ai) {
        winner = "You"
    }
    else if (pc == ai) {
        winner = "No one"
    }
    document.getElementById("content").innerText = `You chose ${choice}. I chose ${opponent}. ${winner} won!!!`

    setTimeout(function() {
        document.getElementById("content").innerText = `You chose ${choice}. I chose ${opponent}. ${winner} won!!! Play again???`
    }, 3000)
}


function aiChoice() {
    ai = Math.ceil(Math.random() * 3);
    if (ai === 1) {
        opponent = "rock";
    }
    else if (ai === 2) {
        opponent = "paper";
    }
    else if (ai === 3) {
        opponent = "scissors"
    }
    console.log(`opponent chose ${opponent}`)
}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 1;
    choice = "rock";
    console.log(`Player chose ${choice}.`);
    aiChoice();
    winnerWinner();
})

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 2;
    choice = "paper";
    console.log(`Player chose ${choice}.`);
    aiChoice();
    winnerWinner();
})

const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 3;
    choice = "scissors";
    console.log(`Player chose ${choice}.`);
    aiChoice();
    winnerWinner();
})



