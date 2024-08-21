let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const usersocrePara =document.querySelector("#user-score");
const compsocrePara =document.querySelector("#comp-score");

const gencompChoice =() => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
};

const drawGame = ()=> {
    console.log ("game was draw.");
    msg.innerText= "game was draw. play again";
    msg.style.backgroundColor = "#70ab8c";
};

const showwinner = (userwin,userchoice,compchoice) =>{
    if (userwin) {
        userScore++;
        usersocrePara.innerText = userScore;
        console.log("you win!");
        msg.innerText= `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compsocrePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText= `you lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);  
    const compchoice = gencompChoice();
    console.log("comp choice =", compchoice); 
    
   if (userchoice === compchoice){
    drawGame();
   } else {
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
    } else {
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
   }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
    
});