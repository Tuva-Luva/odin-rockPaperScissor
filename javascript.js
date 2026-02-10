/*pseudocode:

 X Computers choice:
  1. Create a function that outputs a random number between 0 and 1 (and a varible to store that output.  
  2. Translate that number to rock, papper or scissor. 
  3. Save the choice in a varible?

X Humans choice: 
 1. Create a function that lets the user write a valid alternative for RPS.
 2. use if/else if. 
 3. Create a varible to store the users input in so that it (later) can be compared to the computers output?

X Score
 1. Create a varible that is going to store the computers score
 2. Create a varible that is going to stores the humans score. 
 3. Make sure they start at zero. 

X Rounds
 1. create a function called "playround".
 2. Compare the human choice against the computerchoice, make sure it's case sensetive. 
 3. Declare a winner depending on what choices are made by the computer and human, also show a you lose or win message.  
 4. Add 1 to the score. 
*/

let computerScore = 0;
let humanScore = 0;


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
const message = prompt("Make your choice:").toLowerCase(); 
if (message === "rock") {
    return "rock";
  }

  else if (message === "paper") {
    return "paper";
  }

  else if (message === "scissor") {
    return "scissor";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
 if(humanSelection === computerSelection) {
  return "It's a tie.";
 }
 else if(humanSelection === "rock" && computerSelection === "scissor") {
 humanScore++;
 return "You won. Rock beats scissor.";

 }
 else if(humanSelection === "paper" && computerSelection === "rock") {
 humanScore++;
 return "You won! Paper beats rock.";
 }
 else if(humanSelection === "scissor" && computerSelection === "paper") {
 humanScore++ ;
 return "You won! Scissors beats paper.";
 }
 else {
 computerScore++;
 return `You lose! ${computerSelection} beats ${humanSelection}.`;
 }
}

console.log(playRound(humanSelection, computerSelection))
