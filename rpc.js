let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx =  Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  message.style.backgroundColor  = "#081b31";
}
const showWinner = (userWin , userChoice, compChoice ) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer Win!");
    message.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
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
    showWinner(userWin ,userChoice , compChoice);
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
