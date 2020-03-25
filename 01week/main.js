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