const Adagrams = {
  letterQuantities: {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  },

  letterValues: {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  },

  makeLetterPool() {
    let letterPool = []; // let?
    for (let letter in this.letterQuantities) {
      for (let i = 0; i < this.letterQuantities[letter]; i++) {
        letterPool.push(letter);
      };
    };
    return letterPool;
  },

  drawLetters() {
    // Implement this method for wave 1
    let letterPool = this.makeLetterPool(); //let?

    // Fisher-Yates Algorithm: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for (let i = letterPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = letterPool[i];
      letterPool[i] = letterPool[j];
      letterPool[j] = temp;
    };
    
    return letterPool.slice(0, 10);
  },

  mapLetters(letters) {
    const hand = {};
    letters.forEach((letter) => hand[letter] ? hand[letter] += 1 : hand[letter] = 1 )
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const hand = this.mapLetters(lettersInHand);

    for (let letter of input.split("")) {
      if (!hand[letter] || hand[letter] === 0) {
        return false;
      } else {
        hand[letter] -= 1;
      };
    };

    return true;
  },

  scoreWord(word) {
    let totalScore = 0;
    word.toUpperCase().split("").forEach((letter) => {
      totalScore += this.letterValues[letter];
    });

    if (word.length > 6) {
      totalScore += 8;
    };

    return totalScore;
  },

  highestScoreFrom(words) {
    let highestScore = 0;
    let winningWords = [];

    words.forEach((word) => {
      if (this.scoreWord(word) > highestScore) {
        highestScore = this.scoreWord(word);
        winningWords = [];
        winningWords.push(word);
      } else if (this.scoreWord(word) === highestScore) {
        winningWords.push(word);
      };
    });

    if (winningWords.length === 1) {
      return {
        word: winningWords[0],
        score: highestScore
      };

    } else {

      for (let word of winningWords) {
        if (word.length === 10) {
          return {
            word: word,
            score: highestScore
          };
        };
      };

      const winner = winningWords.reduce((a, b) => a.length <= b.length ? a : b);

      return {
        word: winner,
        score: highestScore
      };
    };
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
