// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
// function should return 1 of 3 things:
// - "it's a tie"
// - "hand 1 wins"
// - "hand 2 wins"

const rockPaperScissors = (hand1, hand2) => {
  let h1 = hand1.toUpperCase().trim();
  let h2 = hand2.toUpperCase().trim();
  //If statement - checks if user input is "rock" "paper" or "scissors"
  if (h1 !== "ROCK" && h1 !== "PAPER" && h1 !== "SCISSORS") {
    return "Please enter a valid game piece"
    getPrompt();
  }
  if (h2 !== "ROCK" && h2 !== "PAPER" && h2 !== "SCISSORS") {
    return "Please enter a valid game piece"
    getPrompt();
  }
  //If statement that first checks for a tie
  //Then iterates through each possible play for player 1
  //Each P1 play has a nested if statement checking all P2 possibilities
  if (h1 === h2) {
    return "It's a tie!"
  } else if (h1 === "ROCK") {
    if (h2 === "PAPER") {
    return "Hand two wins!"
    } else if (h2 === "SCISSORS") {
      return "Hand one wins!"
    }
  } else if (h1 === "PAPER") {
    if (h2 === "ROCK") {
      return "Hand one wins!"
    } else if (h2 === "SCISSORS") {
      return "Hand two wins!"
    }
  } else if (h1 === "SCISSORS") {
    if (h2 === "ROCK") {
      return "Hand two wins!"
    } else if (h2 === "PAPER") {
      return "Hand one wins!"
    }
  }
  
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
