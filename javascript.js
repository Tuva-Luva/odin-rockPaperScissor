let round = 0; let computerScore = 0; let humanScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.333)  {
    return "rock";
  }

  else if (randomNumber > 0.333 && randomNumber <= 0.666) {
    return "paper";
  } 

  else if (randomNumber > 0.666) {
    return "scissor";
  }
}

function getHumanChoice() { 
const input = prompt(`Make your choice for round ${++round}:`).toLowerCase(); 
if (input === "rock") {
    return "rock";
  }

  else if (input === "paper") {
    return "paper";
  }

  else if (input === "scissor") {
    return "scissor";
  }
  return getHumanChoice();
}



 function playRound(humanSelection, computerSelection) {
    if(humanSelection === computerSelection) {
    console.log("It's a tie.");
    humanScore +=1;
    computerScore +=1;
    }
    else if(humanSelection === "rock" && computerSelection === "scissor") {
    
    humanScore+=1;
    console.log("You won! Rock beats scissor.");
    }
    else if(humanSelection === "paper" && computerSelection === "rock") {
    
    humanScore+=1;
    console.log("You won! Paper beats rock.");
    }
    else if(humanSelection === "scissor" && computerSelection === "paper") {
    
    humanScore+=1;
    console.log("You won! Scissors beats paper.");
    }
    else {
    computerScore+=1;
    console.log(`You lose! ${computerSelection} beats ${humanSelection}.`)
    }
  }

function playGame() {
  
  if (humanScore === computerScore){
    console.log(`It's a tie! ${humanScore} - ${computerScore}`)
  }
  else if(humanScore > computerScore) {
    console.log(`You won!!! ${computerScore} - ${humanScore}`)
  }
  else {
    console.log(`You lose :(, ${computerScore} - ${humanScore}`)
  }
}








//--- DOM MANIPULATION ---
/*
Pseudo code:
1. add event listener that activates when the button is clicked. 
2. Add a way to display the result (dont forget to delete console.logs!!)
3. Also make sure the div(s) are displaying the current score and choices during the game. 
*/

const selectRock = document.querySelector(`#Rock`);
let chooseRock = selectRock.addEventListener(`click`, () => {
  console.log(`test1`);
});

const selectPaper = document.querySelector(`#Paper`);
let choosePaper = selectPaper.addEventListener(`click`, () => {
  console.log(`test2`);
});

const selectScissors = document.querySelector(`#Scissors`);
let chooseScissors = selectScissors.addEventListener(`click`, () => {
  console.log(`test3`);
});



