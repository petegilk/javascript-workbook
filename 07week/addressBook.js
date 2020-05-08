'use strict'

window.onload = function() {
  getAddresses();
}


const getAddresses = function() {
  console.log("Fetching address book");

  fetch('https://randomuser.me/api?results=10')
    .then(function(response) {
      console.log("Processing, passing JSON forward");
      return response.json();
    })

    .then(function(data) {
      processContacts(data.results);
    })
}


function processContacts(contacts) {
  console.log('Processing contacts');
  
  // add contacts to the page...
  contacts.forEach(function(item, idx){

    // Creating button and inner text
    let button = document.createElement('button');
    button.innerText = "More Info";
    button.addEventListener('click', function() {
      alert("Button clicked!");
    });

    // Selecting list and creating child elements to append
    let ul = document.getElementById('contacts');
    let li = document.createElement('li');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute('src', item.picture.medium);
    
    ul.appendChild(li);

    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(button);

    p1.innerText = `Name: ${item.name.first} ${item.name.last}`;
    p2.innerText = `Phone: ${item.phone}`;
    p3.innerText = `Address: ${item.location.street.number} ${item.location.street.name} ${item.location.city}, ${item.location.state} ${item.location.postcode}`
    console.log(item);
  });



}


