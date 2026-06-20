let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx =  Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("game was draw.");
}
const showWinner = (userWin) => {
  if(userWin){
    console.log("You Win!");
  }
  else{
    console.log("Computer Win!");
  }
}
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice = ", compChoice);
  if(userChoice === compChoice){
    drawGame();
  }
  else {
    let userWin = true;
    if(userChoice === "rock"){
     userWin   = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
    userWin =   compChoice === "scissors" ? false : true;
    }
    else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
