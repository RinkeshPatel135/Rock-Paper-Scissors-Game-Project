let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score"); 

const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const drawgame = () =>{
   console.log("Game is Draw!!");
   msg.innerText = "Game is Draw, Play again";
   msg.style.backgroundColor = "#0b2b59";
};
    let usercount = 0;
    let compcount = 0;
const gamewiner = (userwin) =>{
 if(userwin)
 {
    console.log("You win Game");
    msg.innerText = "You win Game";
    msg.style.backgroundColor = "Green";
    usercount++;
    user_score.innerText = usercount;
 }
 else
 {
    console.log("You lose Game");
    msg.innerText = "You lose Game";
    msg.style.backgroundColor = "Red";
    compcount++;
    comp_score.innerText = compcount;
 }
};

const playGame = (userChoice) => {
console.log("User Choice = ",userChoice);
const CompChoice = genCompChoice();
console.log("Computer Choice  = ",CompChoice);

if(userChoice === CompChoice)
{
  drawgame();
}
else
{
    let userwin = 0;
    if(userChoice === "rock")
    {
        userwin = CompChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper")
    {
        userChoice = CompChoice === "scissors" ? false : true;
    }
    else
    {
        userChoice = CompChoice === "rock" ? false : true;
    }
    gamewiner(userwin);
}
}

choices.forEach((choice) => {
   choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   });
});