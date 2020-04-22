'use strict'

// Use a do...while loop to console.log 
// the numbers from 1 to 1000.
let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 1000);



// Create an object (an array with keys and values) 
// called person with the following data:
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}



// Use a for...in loop and if statement to console.log 
// the value associated with the key "birthDate" if the 
// birth year is an odd number.
for (x in person.birthDate) {
  let lastDigit = person.birthDate.length-1;
  if (person.birthDate[lastDigit] % 2 !== 0) {
    console.log(person.birthDate);
  } else {
    console.log("This birthday year is an even number");
  }
}



// Create an arrayOfPersons that contains multiple objects
const judy = {
  firstName: "Judy",
  lastName: "Foe",
  birthDate: "Aug 5, 1965",
  gender: "female"
}
const bob = {
  firstName: "Bob",
  lastName: "Vance",
  birthDate: "Feb 7, 1955",
  gender: "male"
}
const mike = {
  firstName: "Mike",
  lastName: "Scott",
  birthDate: "Apr 11, 1975",
  gender: "male"
}

let arrayOfPersons = [judy, bob, mike];



// Use .map() to map over the arrayOfPersons and 
// console.log() their information.
const map1 = arrayOfPersons.map(function(curr, index, arr){
  console.log(arr[index]);
});



// Use .filter() to filter the persons array and 
// console.log only males in the array.
let filterMale = arrayOfPersons.filter(function(curr, index, arr){
  if (arr[index].gender === "male") {
    console.log("Males found: ",arr[index]);
  }
});



// Use .filter() to filter the persons array and 
// console.log only people that were born before 
// Jan 1, 1990.
let bornbefore90 = arrayOfPersons.filter(function(curr,index,arr){
  let bdayNum = arr[index].birthDate.split(" ");
  if (bdayNum[2] < 1990) {
    console.log(arr[index].firstName, "was born before 1990");
  }
});
