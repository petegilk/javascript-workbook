'use strict'

//when "Add" button is clicked, append text to
//bottom of the list
let addButton = document.querySelector('#addbutton');
addButton.addEventListener('click', function(){
  console.log("Clicked add button");
  let inputElement = document.querySelector('.userinput');
  let todoText = inputElement.value;
  inputElement.value = "";

  //create an li element
  let li = document.createElement('li');
  
  //create a span element
  let span = document.createElement('span');
  //update inner text of the span element
  span.innerText = todoText;

  //create a delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  //add a class to the delete button
  deleteButton.classList.add('delete');

  //add the li to the bottom of the ul element
  let ul = document.querySelector('ul');
  ul.appendChild(li);

  //add the span and delete button as
  //children of the new li
  li.appendChild(span);
  setupSpanEvent(span);
  li.appendChild(deleteButton);
  setupDeleteButton(deleteButton);
});



let allDeleted = document.querySelectorAll('.deletebutton');
for (let i=0; i < allDeleted.length; i++) {
  let deleteButton = allDeleted[i];
  setupDeleteButton(deleteButton);
}

function setupDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function(){
    console.log("delete got clicked; parent is", deleteButton.parentElement);
    let parentLi = deleteButton.parentElement;
    parentLi.remove();
  });
}

let allSpans = document.querySelectorAll('span');
for (let i=0; i<allSpans.length; i++) {
  let span = allSpans[i];
  setupSpanEvent(span);
}

// Adds the click event to the span
function setupSpanEvent(span) {
  span.addEventListener('click', function(){
    console.log("This span got clicked", span);
    span.classList.toggle("done");
  });
}

