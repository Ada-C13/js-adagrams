const Adagrams = {
  drawLetters() {
    const LETTERS = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    }; // wave 3: make each key into an object containing scores and numbers available?

    const lettersArr = Object.keys(LETTERS)

    const drawn = [];
    for (let i=0; i<10; i++) {
      let letter = lettersArr[Math.floor(Math.random()*lettersArr.length)];

      // if the number available in the pool is less than 1, a new random value is assigned to letter
      while (LETTERS[letter] < 1) {
        letter = lettersArr[Math.floor(Math.random()*lettersArr.length)];
      };

      // if the letter is available, it is added to the hand and the number available in the pool is decremented 
      while (LETTERS[letter] >= 1) {
        drawn[i] = letter;
        LETTERS[letter] -= 1;
      };
    }
    
    return drawn;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;