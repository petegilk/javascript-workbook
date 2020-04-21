'use strict'

let userInput = document.querySelector("#userInput");
let inputText = userInput.value;
let translationOutput = document.querySelector('#output');
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function(){
  userInput.value = '';
  translationOutput.value = '';
});


translateButton.addEventListener('click', function() {
  let translateButton = document.querySelector("#translateButton");
  
  console.log(inputText);

  //Pig latin translation script
  const pigLatin = (plWord)  => {
    //Declaring variables to split the word, and concat into new variable
    let firstPart;
    let secondPart;
    let scrubWord = plWord.toLowerCase().split("");
    let newWord;
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
      console.log(newWord);
      translationOutput.value = newWord;
    }
    isVowel(scrubWord);
    return newWord;
    
  }
  pigLatin(inputText);

});
