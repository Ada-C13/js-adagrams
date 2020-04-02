const Adagrams = {
      //WAVE ONE: Our first job is to build a hand of 10 letters. To do so, add a function called drawLetters inside of the Adagrams object in src/adagrams.js. 
  drawLetters() {
    const alphabet = {
      A: 9, B: 2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4, M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1, Y:2, Z:1
    };

    const hand = [];

    const only_letters = Object.keys(alphabet);
    
    //ASSIGNMENT REQ: The letters should be randomly drawn from a pool of letters
    //Randomization adapted from from w3resource explanation of random approaches in JS: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    const random_item = (items) => {   
      return items[Math.floor(Math.random()*items.length)];    
    }//close random_item

    //ASSIGNMENT REQ: Each string should contain exactly one letter
    for(let i = 0; i < 10; i++) {
      hand.push(random_item(only_letters));

      if(alphabet.tile > 0) {
        alphabet.tile -= 1;
      }//close if
      //ASSIGNMENT REQ: Each string should contain exactly one letter
      else if(alphabet.tile === 0) {
        hand.push(random_item(only_letters));
      }//close else if 
    }//close for loop used to make hand
    return hand;
  },//close drawLetters

  //WAVE TWO: add a function called usesAvailableLetters
  usesAvailableLetters(input, lettersInHand) {
    let result = true;

    input.split("").forEach((letter) => {
      if (lettersInHand.includes(letter) && result != false) {
        lettersInHand.splice(lettersInHand.indexOf(letter), 1);
      } else {
        result = false;
      }
    });

    return result;
  },

//WAVE THREE: Make a function named scoreWord in the Adagrams object
//ASSIGNMENT REQ: Has one parameter: word, which is a string of characters
scoreWord(word) {
  let score = 0;
  word = word.toUpperCase().split("");

  const letter_scores = {A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10};
  //ASSIGNMENT REQ: Each letter within word has a point value. The number of points of each letter is summed up to represent the total score of word
  word.forEach(function(letter){
    score = score + letter_scores[letter];
  })//closes forEach
  //ASSIGNMENT REQ: If the length of the word is 7, 8, 9, or 10, then the word gets an additional 8 points
  if(word.length > 6){
    score += 8;
  }

  //Returns an integer representing the number of points
  return score;
 }//closes scoreWord
}//close Adagrams -- PUT EVERYTHING ABOVE HERE

// Do not remove this line or your tests will break!
export default Adagrams;
