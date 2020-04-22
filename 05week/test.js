// create a class that represents a rectangle
// constructor to take in the length of 2 sides
// create method that returns the area
// and method that returns the perimeter


// class rectangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   //returns the perimeter
//   perimeter() {
//     return 2 * (this.a + this.b);
//   }

//   //returns the area
//   area() {
//     return this.a * this.b;
//   }

// }

// let x = new rectangle(3, 6);
// let y = new rectangle(10, 42);

// console.log("The perimeter of", x , " is ", x.perimeter());
// console.log("The area of", x, " is ", x.area());

// console.log("The perimeter of ", y , "is" , y.perimeter());
// console.log("The area of", y , " is ", y.area());




'use strict'


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







// this is the sand in for crewmember
// student does not have home room when created
class student {
  constructor(name, gradeLevel) {
    this.name = name;
    this.gradeLevel = gradeLevel;
    this.homeRoom = null;
  }

  description() {
    if(this.homeRoom == null) {
      return `${this.name} is a ${this.gradeLevel}th grader, with no teacher`;
    } else {
      return `${this.name} is a ${this.gradeLevel}th grader, assigned to ${this.homeRoom.teacher}`;
    }
  }

  // assign the home room to the student,
  // update the homerooms roster
  assignHomeRoom() {
    
  }

}



//this is the stand in for ship
class homeRoom {
  constructor(roomNumber, teacher) {
    this.roomNumber = roomNumber;
    this.teacher = teacher;
    this.students = [];
  }

  description() {
    //if there are no students it should return that the room is empty
    if (this.students.length == 0) {
      return `HomeRoom ${this.roomNumber} is managed by ${this.teacher} and the room is empty`
    } else {
      return `HomeRoom ${this.roomNumber} is managed by ${this.teacher} with ${this.students.length} students`
    }
  }

}



let mike = new student("Mike", 10);
let mark = new student("Mark", 10);
let amy = new student("Amy", 12);

let room1 = new homeRoom("101B", "My Defazio");
let room2 = new homeRoom("102B", "Mrs Maria");

room1.students.push(mike);

console.log(room1.description());

