const Adagrams = {
  drawLetters() {
    let letterPool = [];
    const letterChoices = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
      I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
      S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
    };

    for (const letter in letterChoices) {
      if (letterChoices != undefined) {
        const charCount = letterChoices[letter];
        const repeatSplit = letter.repeat(charCount).split('');
        letterPool = letterPool.concat(repeatSplit);
      }
    }

    const userHand = [];
    // used this solution to get random sampling from array https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    for (let i = 0; i < 10; i++) {
      const sample = letterPool[Math.floor(Math.random() * letterPool.length)];
      userHand.push(sample);
    };
    return userHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersHash = {};

    lettersInHand.forEach((letter) => lettersHash[letter]?
    lettersHash[letter] = lettersHash[letter] += 1 : lettersHash[letter] = 1);

    for (let i = 0; i < input.length; i++) {
      const char = input[i].toUpperCase();
      if (lettersHash[char]) {
        lettersHash[char] -= 1;
      } else {
        return false;
      };
    };

    return Object.values(lettersHash).min < 0? false : true;
  },

  scoreWord(word) {
    const splitWord = word.toUpperCase().split('');
    let wordScore = 0;

    const letterScore = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10,
    };

    splitWord.forEach((char) => {
      wordScore += letterScore[char];
    });

    word.length > 6 ? wordScore += 8 : wordScore;
    return wordScore;
  },

  highestScoreFrom(words) {
    const wordScoreHash = {};
    words.forEach((word) => {
      wordScoreHash[word] = this.scoreWord(word);
    });
    const scores = Object.values(wordScoreHash);
    const wordKeys= Object.keys(wordScoreHash);
    const highestScore = Math.max(...scores);
    const index = scores.findIndex((score) => score === highestScore);
    let winningWord = wordKeys[index];

    for (const word in wordScoreHash) {
      if (wordScoreHash[word] === highestScore) {
        if (winningWord.length < 10 && winningWord.length > word.length) {
          winningWord = word;
        } else if (winningWord.length < 10 && word.length === 10) {
          winningWord = word;
        } else if (winningWord.length === 10 && word.length === 10) {
          winningWord = wordKeys[index];
        }
      }
    };
    return {'word': winningWord, 'score': highestScore};
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
