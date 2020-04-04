// Randomize array in-place using Durstenfeld shuffle algorithm
const shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i --) {
    // set j as random number
    let j = Math.floor(Math.random() * (i + 1));
    // swap original indices with j
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Adagrams = {
  LETTER_QUANTITIES: {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1
  },

  drawLetters() {
    let letterPool = [];
    // push letters by quantity into pool
    for(const letter in Adagrams.LETTER_QUANTITIES) {
      for(let i = Adagrams.LETTER_QUANTITIES[letter]; i > 0; i --) {
        letterPool.push(letter);
      }   
    }
    // shuffle
    const shuffled = shuffleArray(letterPool.slice(0));
    // hand of 10 letters
    const hand = shuffled.slice(0, 10);
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.split('');
    // for each letter in inputArray, check for match in hand
    let hand = lettersInHand.slice(0);
    return inputArray.every((letter) => {
      // if letter doesn't exist in hand return false
      if(hand.indexOf(letter) === -1) return false;
      // delete letter from hand to avoid repeats
      delete hand[hand.indexOf(letter)];
      return true;
    });
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;

// Wave 2
// Next, we need a way to check if an input word (a word a player submits) only uses characters that are contained within a collection (or hand) of drawn letters.

// To do so, add a function called Adagrams.usesAvailableLetters in src/adagrams.js. This method should have the following properties:

// Has two parameters:
// input, the first parameter, describes some input word, and is a string
// lettersInHand, the second parameter, describes an array of drawn letters in a hand. You can expect this to be an array of ten strings, with each string representing a letter
// Returns either true or false
// Returns true if every letter in the input word is available (in the right quantities) in the lettersInHand
// Returns false if not; if there is a letter in input that is not present in the lettersInHand or has too much of compared to the lettersInHand