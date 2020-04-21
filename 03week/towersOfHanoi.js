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
  let startMove = stacks[startStack];
  let endMove = stacks[endStack];
  
  //storing popped value of stacks array into variable
  let currentPiece = startMove[startMove.length -1];
  
  //pushing popped variable into new array
  startMove.pop();
  endMove.push(currentPiece);
}

//should return true or false
//depending on if the move is legal
function isLegal(startStack, endStack) {
  let startMove = stacks[startStack];
  let currentPiece = startMove[startMove.length -1];

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
  if (stacks.a === 4,3,2,1) {
    return true;
  } else if (stacks.b === 4,3,2,1) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack) == true) {
    console.log("This is a legal move");
    movePiece(startStack, endStack);
  } else {
    console.log("This is not a legal move");
  }
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
