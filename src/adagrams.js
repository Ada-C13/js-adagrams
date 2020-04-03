const randomItemsIndex = function(items) {
  return Math.floor(Math.random()*items.length);
};

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterDist = { 
      A: 9, B: 2, C: 2, D: 4, E: 12, 
      F: 2, G: 3, H: 2, I: 9, J: 1, 
      K: 1, L: 4, M: 2, N: 6, O: 8, 
      P: 2, Q: 1, R: 6, S: 4, T: 6, 
      U: 4, V: 2, W: 2, X: 1, Y: 2, 
      Z: 1 
    };
    const letterDistArr = Object.entries(letterDist) // returns [["A", 9], ["B", 2] ...]
    const allLetters = letterDistArr.map(letter => letter[0].repeat(letter[1])); 
    let letterPool = allLetters.join('').split('');
    let hand = [];
    const handSize = 10;
    for (let i = 0; i < handSize; i += 1) {
      const randIndex = randomItemsIndex(letterPool)
      hand.push(letterPool[randIndex]);
      letterPool.splice(randIndex, 1);
    };
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let handCopy = lettersInHand.slice();
    // instance variable
    let letterNotInHand = false;
    input.toUpperCase().split('').forEach((letter) => {
      const index = handCopy.indexOf(letter);
      if (index !== -1) {
        handCopy.splice(index, 1);
      } else {
        letterNotInHand = true;
      };
    });
    return !letterNotInHand;
  },

  scoreWord(word) {
    const values = {
      A: 1, B: 3, C: 3, D: 2, E: 1,
      F: 4, G: 2, H: 4, I: 1, J: 8,
      K: 5, L: 1, M: 3, N: 1, O: 1,
      P: 3, Q: 10, R: 1, S: 1, T: 1,
      U: 1, V: 4, W: 4, X: 8, Y: 4,
      Z: 10
    };
    let letterValues = word.toUpperCase().split('').map(letter => values[letter]);

    if (word.length >= 7 && word.length <= 10) {
      letterValues.push(8);
    };

    return letterValues.reduce((acc,curr) => acc + curr, 0)
  },

  highestScoreFrom(words) {
    const maximumScore = Math.max(...words.map(word => this.scoreWord(word)));
    const highest = words.filter(word => this.scoreWord(word) === maximumScore);
    let winningWord = "";
    if (highest.length === 1) {
      winningWord = highest[0];
    } else {
      const wordLengths = highest.map(w => w.length);
      if (wordLengths.includes(10)) {
        const indexOf10 = wordLengths.indexOf(10);
        winningWord = highest[indexOf10];
      } else {
        winningWord = highest[wordLengths.indexOf(Math.min(...wordLengths))];
      }
    };

    let result = {};
    result['score'] = maximumScore;
    result['word'] = winningWord;

    return result;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
