// Our first job is to build a hand of 10 letters. To do so, add a function called `drawLetters` inside of the `Adagrams` object in `src/adagrams.js`. This method should have the following properties:

// - No parameters
// - Returns an array of ten strings
//   - Each string should contain exactly one letter
//   - These represent the hand of letters that the player has drawn
// - The letters should be randomly drawn from a pool of letters
//   - This letter pool should reflect the distribution of letters as described in the table below
// - Invoking this function should **not** change the pool of letters
//   - Imagine that the user returns their hand to the pool before drawing new letters


const Adagrams = {
  

  


  drawLetters() {
    const letterCounts = {
      'A': 9,
      'B': 2,
      'C': 2,
      'D': 4,
      'E': 12,
      'F': 2,
      'G': 3,
      'H': 2,
      'I': 9,
      'J': 1,
      'K': 1,
      'L': 4,
      'M': 2,
      'N': 6,
      'O': 8,
      'P': 2,
      'Q': 1,
      'R': 6,
      'S': 4,
      'T': 6,
      'U': 4,
      'V': 2,
      'W': 2,
      'X': 1,
      'Y': 2,
      'Z': 1
    }
    
    let letterPool = [];
  
    for (const letter in letterCounts) {
      for (let x = 1; x < letterCounts[letter]; x++) {
        letterPool.push(letter);
      }
    }
  
    let lettersInHand = [];
    
    for (let x = 0; x < 10; x++) {
      let rand = Math.floor(Math.random() * letterPool.length);
      lettersInHand.push(letterPool[rand]);
      letterPool.splice(rand, 1);
    };
    return lettersInHand;
  },

  // Check if a word a player submits only uses characters that are contained within a hand of drawn letters

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    let charsArray = input.split('');
    let letterHash = {};
    
    lettersInHand.forEach((letter) => letterHash[letter]?
    letterHash[letter] = letterHash[letter]++ : letterHash[letter] = 1);

    for (let i = 0; i < input.length; i++) {
      const char = charsArray[i];
      if (letterHash[char]) {
        letterHash[char] -=1;
      } else {
        return false;
      };
    };

    letterHash.keys.forEach(function(key) {
      if (letterHash[key] !== 0) {
        return false;
      };
    });

    return true;
  }

  
  // - Has two parameters:
  //    - `input`, the first parameter, describes some input word, and is a string
  //    - `lettersInHand`, the second parameter, describes an array of drawn letters in a hand. You can expect this to be an array of ten strings, with each string representing a letter
  // - Returns either `true` or `false`
  // - Returns `true` if every letter in the `input` word is available (in the right quantities) in the `lettersInHand`
  // - Returns `false` if not; if there is a letter in `input` that is not present in the `lettersInHand` or has too much of compared to the `lettersInHand`

};

// Do not remove this line or your tests will break!
export default Adagrams;
