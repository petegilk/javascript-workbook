'use strict'

// //Declaring new date in variable
// let myDate = new Date();
// console.log("The date is",myDate)

// //Setting inner text of span element to the current date/time
// let mySpan = document.getElementById("theTime");
// mySpan.innerText = myDate.toString();

// //Selects and prints only the year from myDate
// let myYear = document.getElementById("theYear");
// myYear.innerText = "The current year is " + myDate.getFullYear();




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




// Square numbers challenge: Squares each number in an array, and then adds the sum of them all
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
//   newSum = newArr.reduce(function(a, b){
//     return a + b;
//   }, 0);
//   console.log("newSum: ",newSum);
// }
// squareNums();




// Takes in a number, changes it to a string and logs them both to console.
// Then it takes the new "string" and reverses it back to a number, and logs it.
// let newString;
// let newNum;
// function numtostring(a) {
//   newString = a.toString();
//   newNum = parseInt(newString);
//   console.log(newString, a, newNum);
// }
// numtostring(12);

// function getLetterGrade(grade) {
//   let letter;
//   if (grade >= 90) {

//   }
// }

const pigLatin = (plWord)  => {
  //Declaring variables to split the word, and concat into new variable
  let firstPart;
  let secondPart;
  let newWord;
  let scrubWord = plWord.toLowerCase().split("");
  //Function that finds the first vowel
  const isVowel = (word) => {
    for (let i=0;i<word.length;i++) {
      if (word[0] === "a" || word[0] === "e" || 
      word[0] === "i" || word[0] === "o" || word[0] === "u") {
        newWord = scrubWord.join("") + "yay";
      } else if (word[i] === "i" || word[i] === "a" || 
      word[i] === "e" || word[i] === "o" || word[i] === "u") {
        firstPart = word.slice(0, [i]);
        firstPart = firstPart.join("");
        secondPart = word.slice([i], word.length);
        secondPart = secondPart.join("");
        newWord = secondPart + firstPart + "ay";
        break;
      }
    }
  }
  isVowel(scrubWord);
  return newWord;
  console.log(newWord);
}

pigLatin("Table");









// let firstpart;

// function pigLatin (plWord) {
  
//   let secondpart;
//   let newword;
//   let scrub = plWord.toLowerCase().split("");
//   console.log(plWord);
//   function isVowel (word) {
//     console.log(word);
//     // Test within for loop if first letter is vowel, by if(word[i].indexOf === 0)
//     for (let i=0;i<word.length;i++) {
//       if (word[i] === "i" || word[i] === "a" || 
//       word[i] === "e" || word[i] === "o" || word[i] === "u") {
//         firstpart = word.slice(0, [i]);
//         firstpart = firstpart.join("");
//         console.log(firstpart);

//         break;
//       }
//     }
//   }
//   isVowel(scrub);
// }

// pigLatin("CHICKEN");



//think about how you would access the age property of the second element, Zuke in the friends array below.
const user = {
  name: 'Keith',
  friends: [{name: 'Meghan', age: '27'}, {name: 'Zuke', age: '3'}],
  talk: function(name2) {
    console.log("Hello " + name2);
  }
}

console.log(user.friends[1]["name"]);
console.log(user.talk("Peter"));


// function fizzbuzz() {
//   for (let i=0; i<=100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz();

// for(let i=1; i<101; i++){
    
//   let value = "";
//   if(i%3 == 0){
//       value = value + "fizz";
//   }
//   if(i%5 ==0) {
//       value = value + "buzz"
//   }
//   if(value.length == 0){
//       value = i;
//   }
//   console.log(value);
// }