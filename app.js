let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#Comp-score");
let message = document.querySelector("#msg");
let message_container = document.querySelector(".msg-container");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    })
})

function draw(){
    console.log("draw");
    message.innerText = `Game was drawn play again`;
    message.style.backgroundColor = "#081b31"
    
}

function showWinner(userwin , userchoice , compchoice){
     if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        message.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green"
     }else{
       compScore++;
       compScorepara.innerText = compScore;
       message.innerText = `You lost. ${compchoice} beats ${userchoice}`;
       message.style.backgroundColor = "red"
     }
}
function playgame(userchoice){
    console.log("User choice = ", userchoice);
    let compchoice = generateRandom();

    if(userchoice === compchoice){
        draw();
    }else{
        let userwin =true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }else if(userchoice === "scissor"){
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin ,userchoice , compchoice);
    }
}

function generateRandom() {
    let possiblility = ["rock", "paper", "scissor"];
    let randInt = Math.floor(Math.random() * 3);
    console.log("Computer choice : " , possiblility[randInt]);
    return possiblility[randInt];
    // console.log(possiblility[randInt]);
}