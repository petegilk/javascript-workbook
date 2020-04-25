'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = 10;
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// takes one argument, 'hint'
// should check for similar values,
// and exact positioning
function generateHint(guess) {

  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;
  let targetIndex;
  let hintsArr = [];

  for (let i=0; i<solutionArray.length; i++) {
    // comparing solution/guess arrays for exact index value matches
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }

    // I think i need to modify this section,
    // as it's returning correctletters as 0.
    // i'll keep working on it
    for (let a=0; a<solutionArray.length; a++) {
      if (solutionArray.includes(guessArray[a])) {
        targetIndex = guessArray.indexOf(a);
        if (targetIndex > -1) {
          correctLetters++;
          solutionArray[a] = null;
        }
        
      }
      
    }

  }
  
  console.log("Correct letters:", correctLetters);
  console.log("Correct letters in exact location", correctLetterLocations);
  board--;
  console.log(board, 'guesses left!');
}


// takes one argument 'guess', check for a match with solution
// if no match, guess is passed to generateHint() function
function mastermind(guess) {
  let hint;

  solution = 'abcd'; // Comment this out to generate a random solution
  if (guess === solution) {
    console.log("You guessed it correctly!");
  } else {
    generateHint(guess);
  }

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    if (board > 1) {
      mastermind(guess);
      printBoard();
      getPrompt();
    } else {
      console.log('Game over, try again!');
    }
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
