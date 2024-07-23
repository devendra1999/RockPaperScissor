let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}    

const draw = () => {
    msg.textContent = "It's a tie! Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.textContent = `You win! Your ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.textContent = ` You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#C70039";  
    }
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Scissors" ? true : false;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        } else {
            userWin = compChoice === "Paper"? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
})