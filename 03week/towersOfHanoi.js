'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//move the pieces
function movePiece(startStack, endStack) {
  // assigns function input to corresponding stack in stacks array
  // stores that in variable startMove, or endMove
  let startMove = stacks[startStack];
  let endMove = stacks[endStack];
  
  // stores the last index of stacks array to variable
  let currentPiece = startMove[startMove.length -1];
  
  // removes last index of start array
  startMove.pop();

  // pushes last index of start array in "currentPiece" to end array
  endMove.push(currentPiece);
}


function isLegal(startStack, endStack) {

  // Should return false if user input is not "a", "b", or "c"
  if (startStack !== "a" && startStack !== "b" && startStack !== "c") {
    console.log("Please enter a valid starting point letter");
    return false;
  } else if (endStack !== "a" && endStack !== "b" && endStack !== "c" ) {
    console.log("Please enter a valid ending point letter");
    return false
  }

  // stores the starting array into a variable
  // stores last index of starting array as "currentPiece"
  let startMove = stacks[startStack];
  let currentPiece = startMove[startMove.length -1];

  // returns false if user tries to start at empty array
  if (stacks[startStack].length === 0) {
    return false;
  }
  if (stacks[endStack].length === 0) {
    return true;
  }
  for (let i=0; i<=stacks[endStack].length ; i++) {
    if (currentPiece > stacks[endStack][i]) {
      return false;
    } else if (currentPiece < stacks[endStack][i]) {
      return true;
    }
  }
}

//return true if all the discs have been 
//moved to tower b or c
function checkForWin() {
  let b = stacks.b;
  let c = stacks.c;
  if (b[0] === 4 && b[1] === 3 && b[2] === 2 && b[3] === 1) {
    return true;
  } else if (c[0] === 4 && c[1] === 3 && c[2] === 2 && c[3] === 1) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  let startMove = startStack.toLowerCase().trim();
  let endMove = endStack.toLowerCase().trim();

  if (isLegal(startMove, endMove) == true) {
    movePiece(startMove, endMove);
  } else {
    console.log("This is not a legal move");
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if (checkForWin() != true) {
        getPrompt();
      } else {
        printStacks();
        console.log("Congrats, you win!");
      }
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
