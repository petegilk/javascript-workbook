'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
