'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// Should return true if player won on any row
function horizontalWin() {
  for (let i=0; i <= 2; i++) {
    for (let a=0; a <=2; a++) {
      if (board[i][a] === "X" && board[i][a] === "X" && board[i][a] === "X") {
        return true;
      }
    }
  }
}


// Should return true if player won on any column
function verticalWin() {
  for (let i=0; i <= 2; i++) {
    for (let a=0; a <=2; a++) {
      if (board [a][i] === "X" && board[a][i] === "X" && board[a][i]) {
        return true;
      }
    }
  }
}

// Should return true if player won on any diagonal
function diagonalWin() {
  for (let i=0; i <= 2; i++) {
    if (board[i][i] === "X") {

    }
  }
}

// Should return true if any above functions return true
function checkForWin() {
  if (horizontalWin() === true) {
    return true;
  } else if (verticalWin() === true) {
    return true;
  } else if (diagonalWin() === true) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here

  // set value on that box
  if (playerTurn === "X") {
    board[row][column] = "X";
    checkForWin();
    playerTurn === "O"
  } else if (playerTurn === "O") {
    board[row][column] === "O";
    checkForWin();
    playerTurn === "X"
  }
  // check if the player won
  // if they won say congrats
  // switch variable to player 2

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
