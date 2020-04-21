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
  //filter for capital letters, and spaces
  let startMove = startStack.toLowerCase().trim();
  let endMove = endStack.toLowerCase().trim();
  
  //storing popped value of stacks array into variable
  let currentPiece = stacks[startMove].pop();

  //pushing popped variable into new array
  stacks[endMove].push(currentPiece);
}

//should return true or false
//depending on if the move is legal
function isLegal(startStack, endStack) {
  if (startStack.length === 0) {
    return false;
  }
  if (endStack.length === 0) {
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
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  
  let fromStack = stacks[startStack];
  let toStack = stacks[endStack];
  movePiece(toStack, fromStack);
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
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
