/*pseudocode:

 X Computers choice:
  1. Create a function that outputs a random number between 0 and 1 (and a varible to store that output.  
  2. Translate that number to rock, papper or scissor. 
  3. Save the choice in a varible?
*/

let randomNumber = Math.random();

function getComputerChoice() {
 if (randomNumber <= 0.333)  {
  let rock = "Rock";
  return rock;
 }

 else if (randomNumber > 0.333 && randomNumber <= 0.666) {
  let paper = "Paper";
  return paper;
 } 

 else if (randomNumber > 0.666) {
  let scissor = "Scissor";
  return scissor;
 }
}

console.log(getComputerChoice())