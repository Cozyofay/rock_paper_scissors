//Create random number to make computers choice
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
//Initialisation
let hun;
let humanScore = 0;
let computerScore = 0;

//The game
function playRound(hun){
    if (humanScore >= 5 || computerScore >=5) return;
    const comp = getComputerChoice();
    if  (hun ==  comp){
        result.textContent = `Draw! Both chose ${hun}`;
    }else if(
        (hun == "rock" && comp == "paper")||
        (hun == "paper" && comp == "rock")||
        (hun == "scissors" && comp == "paper")
    ){
        humanScore++
        result.textContent = `You win! ${hun} beats ${comp}`;
    }   else{

        computerScore++
        result.textContent = `Computer wins! ${comp} beats ${hun}`;

    }    

    result.textContent += `\nScore: You ${humanScore} - ${computerScore} Computer`;
} 
//Loop for playround
function playGame(){
    for (let i =0; i <5; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
    }

    if (humanScore > computerScore){
        result.textContent = "You won";
    } else if(humanScore < computerScore){
        result.textContent = "Computer won"
    }else{
            result.textContent = "It was a tie";
        }
    }


//Creating DOM elements
const container = document.createElement("div")
const result = document.createElement("div")
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

//content of elements
result.textContent = "Results will display here"
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

//adding classes
result.classList.add("result")
container.classList.add("container")
rockBtn.classList.add("button")
paperBtn.classList.add("button")
scissorsBtn.classList.add("button")

//appending as children to container and appending container to body
document.body.appendChild(result)
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
document.body.appendChild(container);

//Event listeners
rockBtn.addEventListener("click", () => handleClick("rock", rockBtn));
paperBtn.addEventListener("click", () => handleClick("paper", paperBtn));
scissorsBtn.addEventListener("click", () => handleClick("scissors", scissorsBtn));

function handleClick(choice, btn) {
    btn.classList.add("clicked");
    playRound(choice);
    setTimeout(() => btn.classList.remove("clicked"), 100);
}
