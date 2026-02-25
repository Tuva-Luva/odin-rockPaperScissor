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
const input = prompt("Make your choice:").toLowerCase(); 
if (input === "rock") {
    return "rock";
  }

  else if (input === "paper") {
    return "paper";
  }

  else if (input === "scissor") {
    return "scissor";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
let computerScore = 0;
let humanScore = 0;

function playRound(humanSelection, computerSelection) {
 if(humanSelection === computerSelection) {
  return "It's a tie.";
 }
 else if(humanSelection === "rock" && computerSelection === "scissor") {
 humanScore++;
 return "You won! Rock beats scissor.";
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
return playRound(humanSelection, computerSelection);
}