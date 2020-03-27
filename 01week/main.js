'use strict'
console.log("Hello");

//Declaring new date in variable
let myDate = new Date();
console.log("The date is",myDate)

//Setting inner text of span element to the current date/time
let mySpan = document.getElementById("theTime");
mySpan.innerText = myDate.toString();

//Selects and prints only the year from myDate
let myYear = document.getElementById("theYear");
myYear.innerText = "The current year is " + myDate.getFullYear();


//Fizzbuzz challenge, function checks if numbers between 1 - 1000
//are divisible by 3 & 5, 5, or 3
// let array1000 = [];
// function numbers1000() {
//     for (let i = 0; i <= 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz", i);
//     } else if (i % 5 === 0) {
//       console.log("buzz", i);
//     } else if (i % 3 === 0) {
//       console.log("fizz", i);
//     } else {
//       console.log(i);
//     }
//     }
//     if (array1000.length === 1000) {
//     return array1000;
//     }
// }
// numbers1000();

// const myArr = [2,3,5,6,8];
// let newArr = [];
// let newSquared;
// let newSum;
// function squareNums() {
//   for(let i=0; i < myArr.length; i++) {
//     newSquared = Math.pow(myArr[i], 2);
//     newArr.push(newSquared);
//   }
//   console.log(newArr);
// }
// squareNums();
let newString;
let newNum;
function numtostring(a) {
  newString = a.toString();
  newNum = parseInt(newString);
  console.log(newString, a, newNum);
}
numtostring(12);

function getLetterGrade(grade) {
  let letter;
  if (grade >= 90) {

  }
}