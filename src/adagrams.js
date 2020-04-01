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
    input = input.split("")
    // Creates a duplicate to maintain integrity of original letters in hand
    const comparison_check = lettersInHand

    for(let i in input) {
      if(lettersInHand.includes(i)) {
        comparison_check.delete(i);
      }//close if
      else {
        return false;
      }//close else
    return true;
    }//close for..in
  }//close usesAvailableLetters

};//close Adagrams -- PUT EVERYTHING ABOVE HERE

// Do not remove this line or your tests will break!
export default Adagrams;
