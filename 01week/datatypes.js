'use strict'

//Wite a JavaScript program to display the current date and time.
let now = new Date();
console.log("The current date and time is ", now);

//Write a JavaScript program to convert a number to a string.
const theNumber = 5;
const theString = theNumber.toString();

console.log("The type of theString variable is", (typeof theString))
console.log("The string is", theNumber.toString())
console.log("The number is", theNumber);

//Write a JavaScript program to convert a string to a number
const theOtherString = "4.5";
const theOtherNumber = parseInt(theOtherString, 10);
console.log("The otherString type is", (typeof theOtherString));

//Write a JavaScript program that takes in different datatypes and prints out whether they are
let undefvar, boolvar, nullvar, numvar, stringvar;
boolvar = true;
nullvar = null;
numvar = 55;
stringvar = ""
const dataType = (dataOne) => {
  console.log("The datatype is: " + typeof dataOne);
}
dataType(boolvar);
dataType(nullvar);
dataType(undefvar);
dataType(numvar);
dataType(stringvar);

//Write a JavaScript program that adds 2 numbers together
const sumFinder = (a, b) => {
  console.log(a + b);
  return a + b;
}

sumFinder(10, 20);

//Write a JavaScript program that runs only when 2 things are true
const bothTrue = (a, b) => {
  if (a == true && b == true) {
    console.log("Both values are true");
    // alert("Both values are true");
  } else {
    console.log("One or both values are false");
  }
}

bothTrue(boolvar, boolvar);

//Write a JavaScript program that runs when 1 of 2 things are true
const oneTrue = (a, b) => {
  if (a == true || b == true) {
    console.log("One of these is true!");
    return true;
  } else {
    console.log("Neither of these are true.");
    return false;
  }
}

//Write a JavaScript program that runs when both things are not true
const neitherTrue = (a, b) => {
  if (a !== true && b !== true) {
    console.log("Neither are true");
  }
}