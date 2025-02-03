let playerScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const reset = document.querySelector("#msg-reset");

reset.addEventListener("click",()=>{
    userScore.innerText = "0";
    compScore.innerText = "0";
})
const getComputerChoice =()=>{
    const options =["rock","paper","scissors"];
    const Idx = Math.floor(Math.random()*3)  // this will generate number in range 0-2

    return options[Idx];
}



choice.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        //console.log("Choice Clicked!!");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


const drawGame =(userChoice,computerChoice)=>{
    if(userChoice === computerChoice){
        //alert("This is a Tie!!");
        msg.innerText = "Game Tie!"
        msg.style.backgroundColor = "#0c1618";
    }
}

const showWinner = (playerWin) =>{
    if(playerWin){
        playerScore++;
        console.log("You Win!");
        msg.innerText = "Player Win!";
        msg.style.backgroundColor = "green";
        userScore.innerText = playerScore;
    }else{
        computerScore++;
        console.log("You Lose!");
        msg.innerText = "Player Lose!";
        msg.style.backgroundColor = "red";
        compScore.innerText = computerScore;
    }
}

const playGame = (userChoice)=>{

    console.log(userChoice," Was clicked - player");
    const computerChoice = getComputerChoice();
    console.log(computerChoice," was clicked - computer")
    if(userChoice === computerChoice){
        // return "It's a tie!!";
        drawGame();

    }else{
        let playerWin = true;
        if(userChoice ==="rock"){
            playerWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            playerWin = computerChoice === "scissors" ? false : true;
        }else{
            playerWin = computerChoice === "rock" ? false : true;
        }

        showWinner(playerWin);
    }

}
