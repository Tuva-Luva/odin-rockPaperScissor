/*pseudocode:

 X Computers choice:
  1. Create a function that outputs a random number between 0 and 1 (and a varible to store that output.  
  2. Translate that number to rock, papper or scissor. 
  3. Save the choice in a varible?
*/


function getComputerChoice() {
let randomNumber = Math.random();
return randomNumber;
}

console.log(getComputerChoice())