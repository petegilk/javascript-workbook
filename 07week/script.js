'use strict'


window.onload = function() {
  console.log('window loaded: onload');
  getPosts();
}



let getPosts = function(){
  console.log('inside the posts function, making fetch request');
  fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(function(response) {
      if(!response.ok) {
        throw Error("Server said no!");
      }
      console.log('fetch is done', response);
      return response.json()
    })

    .then(function(data){
      console.log("Got my data:", data.length);
      data.forEach(updateHtml)
    }).catch(function(error) {
      alert("Something went wrong!");
    })

  console.log('request sent off...');
}

let fetchedUsers = {};

let updateHtml = function(post) {
  console.log("Updating the html for post", post);
  let postsUl = document.getElementById('posts');
  let postsLi = document.createElement('li');
  postsLi.innerText = post.title;
  postsUl.appendChild(postsLi);

  let userID = post.userID;
  let userSpan = document.createElement('span');

  userSpan.innerText = "  - by " + userID;
  postsLi.append(userSpan);

  fetch('http://jsonplaceholder.typicode.com/posts')
}