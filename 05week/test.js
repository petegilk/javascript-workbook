'use strict'




function isARampNumber(number) {

  let string = number.toString();
  let arr = string.split('');
  let numsArr = [];
  let rampNumbers = 0;
  // Created for loop to convert array of strings to numbers
  // 
  for (let j = 0; j<arr.length; j++) {
    numsArr.push(Number(arr[j]));
  }

  for(let i = 0; i < numsArr.length; i++) {
  
    if (numsArr[i] < numsArr[i + 1]) {
      rampNumbers++;
    }

    // if (numsArr[i] > numsArr[i + 1]) {
    //   rampNumbers = numsArr[i];
    // }
  }

  console.log("There are", rampNumbers, "ramp numbers");
}

console.log(isARampNumber(31));
console.log(isARampNumber(752));
console.log(isARampNumber(1278));
console.log(isARampNumber(1497));









//1 assignment = 1 unit of work
//10 assignments = 10 units work
//100 assignments = 100 work
//1000 assignments = 1000 work

// function checkForPlagiarism(assignments){
//   for (let i=0; i< assignments.length; i++) {
//     for (let j = 0; j < assignments.length; j++) {
//       console.log("comparing ", assignments[i], ' to ', assignments[j]);
//     }
//   }
// }

// let assignments = ['a', 'b', 'c', 'd'];




// console.log("===============ALGORITHMS================");


// let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// function searchFor(haystack, needle) {
  // simple implementation of looping through the array

  // for (let i=0;i<haystack.length; i++) {
  //   if (needle == haystack[i]) {
  //     return true;
  //   }
  // }
  // return false;

  // binary search implementation, assumes the list is ordered
  
//   let l = 0;
//   let r = haystack.length -1;
//   while(l <= r) {
//     let m = Math.floor((l+r)/2);
//     if (haystack[m] > needle) {
//       l = m +1;
//     } else if (haystack[m] > needle) {
//       r = m -1;
//     } else {
//       return true;
//     }
//   }
// }

// searchFor(words,'e');





// let solution = 'abcd';
// let generateHint = (guess) => {
//   let solutionArray = solution.split('');
//   let guessArray = guess.split('');
//   let correctLetters = 0;
//   let perfectMatch = 0;
//   for (let i=0;i<solution.length;i++) {
//     for (let a=0;a<solution.length;a++) {
//       if (solutionArray[i] === guessArray[a]) {
//         console.log(solutionArray[i], guessArray[a]);
//       }
//     }
//   }
  
// }

// let mastermind = (guess) => {
//   // let solution = 'abcd';
//   if (guess === solution) {
//     console.log(`${guess} and ${solution} are the same`);
//   } else {
//     generateHint(guess);
//   }
// }
// mastermind("aecf");



console.log("----------Break----------");
// class Person {
//   constructor(name, age, height){
//     this.myName = name;
//     this.myAge = age;
//     this.myHeight = height;
//   }
// }


// let jimmy = new Person("Jimmy", 26, "5 ft");
// console.log(jimmy);


// class Person {
//   constructor (name, age, height) {
    
//     this.name = name;
//     this.age = age;
//     if (height && height > 0) {
//       this.height = height;
//     } else {
//       this.height = 66;
//     }
//   }

//   greeting() {
//     return "Hi! My name is " + this.name ;
//   }

// }

// let guy = new Person("Adam", 21, -1);
// let gal = new Person("Eve", 24, 72);


// console.log("guy = ", guy);
// console.log("gal = ", gal);

// console.log(guy.greeting());







// // this is the stand in for crewmember
// // student does not have home room when created
// class student {
//   constructor(name, gradeLevel) {
//     this.name = name;
//     this.gradeLevel = gradeLevel;
//     this.homeRoom = null;
//   }

//   description() {
//     if(this.homeRoom == null) {
//       return `${this.name} is a ${this.gradeLevel}th grader, with no teacher`;
//     } else {
//       return `${this.name} is a ${this.gradeLevel}th grader, assigned to ${this.homeRoom.teacher}`;
//     }
//   }

//   // assign the home room to the student,
//   // update the homerooms roster
//   assignHomeRoom() {
    
//   }

// }



//this is the stand in for ship
// class homeRoom {
//   constructor(roomNumber, teacher) {
//     this.roomNumber = roomNumber;
//     this.teacher = teacher;
//     this.students = [];
//   }

//   description() {
//     //if there are no students it should return that the room is empty
//     if (this.students.length == 0) {
//       return `HomeRoom ${this.roomNumber} is managed by ${this.teacher} and the room is empty`
//     } else {
//       return `HomeRoom ${this.roomNumber} is managed by ${this.teacher} with ${this.students.length} students`
//     }
//   }

// }



// let mike = new student("Mike", 10);
// let mark = new student("Mark", 10);
// let amy = new student("Amy", 12);

// let room1 = new homeRoom("101B", "My Defazio");
// let room2 = new homeRoom("102B", "Mrs Maria");

// room1.students.push(mike);

// console.log(room1.description());




// console.log("----------Break----------");





// vehicle simulation
// want a class to represent our vehicle
// vehicle should have some attributes
// one of them should be MPG attribute
// we should be able to add gas to our car
// we should be able to drive for a certain distance
// we should be able to query it for the range left

// class Vehicle{
//   constructor(mpg, color, engineType, gasTankCapacity) {
//     this.mpg = mpg;
//     this.color = color;
//     this.engineType = engineType;
//     this.gasTankCapacity = gasTankCapacity; // holds max capacity of tank in gallons
//     this.fuelLevel = 0; // holds the current fuel level in gallons
//   }

//   // gallons: number of gallons to add to the tank
//   fuelUp(gallons) {
//     this.fuelLevel = this.fuelLevel + gallons;

//     if (this.fuelLevel > this.gasTankCapacity) {
//       this.fuelLevel = this.gasTankCapacity;
//     } else if (this.fuelLevel < 0) {
//       this.fuelLevel = 0;
//     }
//   }

//   // the number of miles you're driving
//   // want to update the fuel level based on the number of miles driven
//   drive(miles) {
//     console.log("Inside the vehicle method");
//     // distance/mpg gives us the amount of gas consumed
//     // know that i have the amount of gas consumed, i can subtract it from fuel level

//     let gallonsConsumed = miles/this.mpg;
//     this.fuelLevel = this.fuelLevel - gallonsConsumed;
//     if (this.fuelLevel < 0) {
//       this.fuelLevel = 0;
//     }

//   }
// }

// my truck class
// should have a bedsize
// trucks only come in color white
// should override the drive method, such that if i am carrying cargo,
//    my mpg is reduced by 15%

// class Truck extends Vehicle {
//   constructor (mpg, engineType, gasTankCapacity, bedsize) {
//     super(mpg, 'white', engineType, gasTankCapacity);
//     this.bedsize = bedsize;
//     this.hasCargo = false;
//   }
//   loadUp() {
//     this.hasCargo = true;
//   }
//   unLoad() {
//     this.hasCargo = false;
//   }

//   drive(miles) {
//     console.log("inside the truck method");
//     // distance/mpg gives us the amount of gas consumed
//     // know that i have the amount of gas consumed, i can subtract it from fuel level

//     if (this.hasCargo) {

//     }
//     let gallonsConsumed;
//     if (this.hasCargo) {
//       gallonsConsumed = miles/(this.mpg * .85);
//     } else {
//       gallonsConsumed = miles/this.mpg;
//     }
//     this.fuelLevel = this.fuelLevel - gallonsConsumed;
//     if (this.fuelLevel < 0) {
//       this.fuelLevel = 0;
//     }

//   }

// }



// let myJeep = new Vehicle(15, "Blue,", "5.3 liter", 24);
// myJeep.fuelUp(10);
// myJeep.drive(30, 1);

// //console.log(myJeep.fuelLevel); // fuel level should be 8
// myJeep.fuelUp(40);
// //console.log(myJeep.fuelLevel); // fuel level should be 24 gallons


// let myTruck = new Truck(30, "Electric", 25, "long");
// myTruck.fuelUp(25);
// myTruck.drive(4);
// console.log(myTruck.fuelLevel);