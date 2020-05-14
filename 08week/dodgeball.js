'use strict'

// Array of people
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// Populate people list when 'List People' button is clicked

// Make Player - When I click 'Make Player' button by a person,
//  they should be removed from people array and added to players array

// Set Team - When i click 'Make Blue' or 'Make Red', person should be
//   removed from list of players and placed into list of their team color

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExp){
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExp = yearsExp;
  }
}

class Teammate extends player {
  constructor(color, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExp){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExp);
    this.color = color;
  }
}

// listPeopleChoices function is tied to button onclick in the HTML
// maps each object in arrOfPeople with a list item, button, and innerText of li
// then passes entire 'person' object to makePlayer function
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    button.addEventListener('click', function() {
      makePlayer(person)
      li.parentElement.removeChild(li);
    } )
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  console.log(`li ${person.id} was clicked!`)

  // setting ul element ID 'Players' to variable
  // setting variables to hold new elements: li, and button
  const playerList = document.getElementById('players');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const redButton = document.createElement('button');
  const blueButton = document.createElement('button');

  playerList.appendChild(li);
  li.appendChild(blueButton);
  li.appendChild(redButton);
  li.appendChild(span);
  blueButton.innerText = 'Blue Team';
  redButton.innerText = 'Red Team';
  span.innerHTML = ` ${person.name} - ${person.age}`;
  

  console.log(li.parentElement);
}