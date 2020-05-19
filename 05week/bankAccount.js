'use strict'

// Account Class
// attributes / fields:
// - account number // this is passed in to the constructor
// - owner //this is passed in to the constructor
// - a list of transactions  // starts of empty
// methods:
// - balance(): loop through all the transactions, 
//   and return the current balance
//-  addTransaction(payee, amount); // checks to see if the amount is valid (ie cannot debit more than the balance)
//
//-  instead of addTransaction():
//   deposit(amt);
//   charge(payee, amount)
//

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance() {
    if (this.transactions.length > 0) {
      let currentBalance = 0;
      for (let i=0; i<this.transactions.length; i++) {
        currentBalance += this.transactions[i].amount;
      }
      return currentBalance;
    } else {
      return 0;
    }
  }

  deposit(amt) {
    if (amt < 0) {
      return false;
    } else {
      this.transactions.push(new Transactions(amt));
    }
  }

  charge(payee, amt) {
    let withdrawal;
    if (this.balance() < amt) {
      return false;
    } else {
      if (amt > 0) {
        withdrawal = amt - (amt * 2);
      } else if (amt < 0) {
        withdrawal = Math.abs(amt);
      }
      this.transactions.push(new Transactions(withdrawal, payee))
    }
    }

}

// Transaction Class
// - amount (can be either positive or negative) // passed in to constructor
// - payee // passed in to constructor
// - date  // auto set in the constructor
// 

class Transactions {
  constructor(amount, payee) {
    let date = new Date();
    let d = date.getUTCDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    this.amount = amount;
    this.payee = payee;
    this.date = `${d}/${m}/${y}`;
  }

}



let acct1 = new BankAccount("5553429", "John Doe");

console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()); // 0

acct1.deposit(100)
console.log(acct1.balance()); // 100

acct1.deposit(-200)  // should not be allowed
console.log(acct1.balance()); // 100

acct1.charge("Target", 30.50)
acct1.charge("FreeBirds", 15.15)
console.log(acct1.balance())  //54.35

acct1.charge("Diamond Shop", 1000) // should not be allowed
console.log(acct1.balance())  //54.35

acct1.charge("Target", -20) //refund
console.log(acct1.balance())  //74.35


