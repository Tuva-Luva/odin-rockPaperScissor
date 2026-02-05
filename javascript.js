/*pseudocode:

 X Computers choice:
  1. Create a function that outputs a random number between 0 and 1 (and a varible to store that output.  
  2. Translate that number to rock, papper or scissor. 
  3. Save the choice in a varible?

X Humans choice: 
 1. Create a function that lets the user write a valid alternative for RPS.
 2. use if/else if. 
 3. Create a varible to store the users input in so that it (later) can be compared to the computers output. 
*/

let rock = "Rock";
let paper = "Paper";
let scissor = "Scissor";


function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.333)  {
    return rock;
  }

  else if (randomNumber > 0.333 && randomNumber <= 0.666) {
    return paper;
  } 

  else if (randomNumber > 0.666) {
    return scissor;
  }
}

console.log(getComputerChoice())

function getHumanChoice() {
  let message = prompt("Make your choice:")
  if (message === "Rock") {
    return rock;
  }

  else if (message === "Paper") {
    return paper;
  }

  else if (message === "Scissor") {
    return scissor;
  }
}

console.log(getHumanChoice())