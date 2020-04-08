const Adagrams = {
  lettersPool: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z",],

  drawLetters() {
    const hand = []
    while (hand.length < 10) {
      let tileNumber = Math.round(Math.random() * 98);
      if (!hand.includes(tileNumber)) {
        hand.push(tileNumber);
      }
    } 
  return hand.map(x => this.lettersPool[x]);
  },

  usesAvailableLetters(input, drawnHand) {
    const hash = {}

    for (let i = 0; i < drawnHand.length; i++) {
      hash[drawnHand[i]] != null ? hash[drawnHand[i]] += 1 : hash[drawnHand[i]] = 1
    };

    for (let i = 0; i < input.length; i++) {
      if (hash[input[i]] === undefined || hash[input[i]] === 0) return false;
      hash[input[i]]--;
    }
    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase();
    const letterScores = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5, 
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };
    let score = 0;
    for(let i = 0; i < word.length; i++) {
      score += letterScores[word[i]];
    }
    if (word.length >= 7 && word.length <= 10) score += 8;
    return score;
  },

  _breakTies(words) {
    let bestWord = words[0];
    for (const word of words) {
      if (bestWord.length !== 10 && (word.length === 10 || word.length < bestWord.length)) bestWord = word;
    }
    return [bestWord];
  },

  highestScoreFrom(words) {
    let highScore = this.scoreWord(words[0]);
    let highWords = [words[0]];

    for (const word of words) {
      let score = this.scoreWord(word);
      if (score === highScore) {
        highWords.push(word);
      }
      if (score > highScore) {
        highScore = score;
        highWords = [word];
      }
    }
    if (highWords.length > 1) highWords = this._breakTies(highWords);
    return {word: highWords[0], score: highScore};
  },
  
};

// Do not remove this line or your tests will break!
export default Adagrams;
