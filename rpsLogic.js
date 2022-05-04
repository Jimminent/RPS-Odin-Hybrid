var ai = undefined;
var pc = undefined;
var choice = undefined;
var opponent = undefined;
var winner = undefined;
var aiScore = 0;
var playerScore = 0;
var roundNumber = 0;

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

function winnerWinner() {
    if (ai == 3 && pc == 1) {
        winner = "You";
        playerScore++;
    }
    else if (ai == 1 && pc == 3) {
        winner = "I";
        aiScore++;
    }
    else if (ai > pc) {
        winner = "I";
        aiScore++;
    }
    else if (pc > ai) {
        winner = "You";
        playerScore++;
    }
    else if (pc == ai) {
        winner = "No one";
    }
    roundNumber++;
    if (roundNumber < 5) {
        document.getElementById("content").innerText = `You chose ${choice}. I chose ${opponent}. ${winner} won!!!`;
    }
    else {
        document.getElementById("content").innerText = `You chose ${choice}. I chose ${opponent}. ${winner} won!!! Good Game! Play again???`;
    }

    // setTimeout(function() {
    //     document.getElementById("content").innerText = `You chose ${choice}. I chose ${opponent}. ${winner} won!!! Play again???`
    // }, 3000)
}

function scoreboardUpdate() {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("aiScore").innerText = aiScore;
    document.getElementById("roundNumber").innerText = roundNumber;
}


function roundWrapUp() {
    if (roundNumber <= 5) {
        console.log(`Player chose ${choice}.`);
        aiChoice();
        winnerWinner();
        scoreboardUpdate();
    }
    if (roundNumber == 6) {
        document.getElementById("content").innerText = `Choose your Weapon!`;
        roundNumber = 0;
        aiScore = 0;
        playerScore = 0;
        scoreboardUpdate();
    }
}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 1;
    choice = "rock";
    roundWrapUp();
})

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 2;
    choice = "paper";
    roundWrapUp();
})

const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", (e) => {
    e.preventDefault();
    pc = 3;
    choice = "scissors";
    roundWrapUp();
})



