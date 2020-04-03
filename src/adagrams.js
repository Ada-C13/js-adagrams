const Adagrams = {
  drawLetters() {
    const LETTERS = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    };

    lettersArray = [];
    for (const key in LETTERS) {
      for (let i=0; i<=LETTERS.key; i++) {
        lettersArray.push(key);
      };
    };

    const drawn = {};
    for (let i=0; i<=10; i++) {
      lettersArray[Math.floor(Math.random()*lettersArray.length)];
      // iterate 10 times: draw 10 letters at random, increasing the value by 1 each time a letter is added, and reducing the number in POOL_OF_LETTERS by one each time a letter is drawn. If the number available in the pool is less than 1, it cannot be drawn.
    }

    // return Objects.keys(drawn) because the tests are expecting an array!
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;