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
  const handSize = 10,

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
  
  let letterPool = [],

  for (const letter in letterCounts) {
    for (let x = 1; x < letterCounts[letter]; x++) {
      letterPool.push(letter)
    }
  }


//   const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


  drawLetters() {
    // Implement this method for wave 1
  };
};

// Do not remove this line or your tests will break!
export default Adagrams;
