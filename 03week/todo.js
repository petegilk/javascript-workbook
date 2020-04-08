'use strict'

let addButton = document.querySelector('#addbutton');
addButton.addEventListener('click', function(){
  console.log("Clicked add button");
  let newLi = document.querySelector('.userinput').value;
  document.createElement('li');
  document.createElement('span').innerText(newLi);
});



let allDeleted = document.querySelectorAll('.delete');
for (let i=0; i < allDeleted.length; i++) {
  let deleteButton = allDeleted[i];
  setupDeleteButton(deleteButton);
}

function setupDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function(){
    console.log("delete got clicked, parent is", deleteButton.parentElement);
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

