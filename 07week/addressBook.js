'use strict'

window.onload = function() {
  console.log("Address book assignment loaded");
  getAddresses();
}

const getAddresses = function() {
  console.log("Fetching address book");

  fetch('https://randomuser.me/api?results=10')
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
    })
}