function getComputerChoice(){
    num = Math.floor(Math.random()*3) +1 ;
    if (num == 1){
        return "rock"
    } else if (num == 2){
        return "paper"
    } else if (num == 3){
        return "scissors"
    }else{
        return null
    }
}

function getHumanChoice(){
    choice = prompt("Enter your choice");
    ans = choice.toLowerCase();
    return ans;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let hun = getHumanChoice(); 
    let comp = getComputerChoice();
    if  (hun ==  comp){
        console.log("Draw");
    }else if(
        (hun == "rock" && comp == "paper")||
        (hun == "paper" && comp == "rock")||
        (hun == "scissors" && comp == "paper")
    ){
        humanScore++
        console.log("You won this round")
    }   else{

        computerScore++
        console.log("Computer won this round")

    }     

    console.log(`Current Score: You ${humanScore} - ${computerScore} Computer\n`);
}

console.log(playRound());

function playGame(){
    for (let i =0; i <5; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
    }

    console.log("Final Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You won")
    } else if(humanScore < computerScore){
        console.log("Computer won");
    }else{
            console.log("Tie")
        }
    }
playGame();