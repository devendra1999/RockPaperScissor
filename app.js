let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}       

const playGame = (userChoice) => {
    //
    console.log("player chosen: ", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer chose: ", compChoice);

    if (userChoice === compChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        console.log("Player wins!");
        userScore++;
    } else {
        console.log("Computer wins!");
        compScore++;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // event generation on click and event handling on click is executing the function
        // console.log("choice clicked");
        const userChoice = choice.id;
        playGame(userChoice);
        // showWinner(userChoice, compChoice);
    })
})