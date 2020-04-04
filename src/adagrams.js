const Adagrams = {
  drawLetters() {
    let letterPool = [];
    const letterChoices = {A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
      I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
      S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};
    for (const letter in letterChoices) {
      if (Object.prototype.hasOwnProperty.call(letterChoices, letter)) {
        const charCount = letterChoices[letter];
        const repeatSplit = letter.repeat(charCount).split('');
        letterPool = letterPool.concat(repeatSplit);
      }
    }

    const userHand = [];

    for (let i = 0; i < 10; i++) {
      const sample = letterPool[Math.floor(Math.random() * letterPool.length)];
      userHand.push(sample);
    };
    return userHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    const splitWord = input.split('');
    const lettersHash = {};

    lettersInHand.forEach((letter) => lettersHash[letter]?
    lettersHash[letter] = lettersHash[letter] += 1 : lettersHash[letter] = 1);
    let containLetter = true;
    splitWord.forEach((char) => {
      if (lettersHash[char]) {
        lettersHash[char] -= 1;
      } else {
        containLetter = false;
      };
    });

    if (containLetter === true) {
      const letterCount = Object.values(lettersHash);
      return letterCount.min < 0? false : true;
    } else {
      return false;
    };
  },

  scoreWord(word) {
    word = word.toUpperCase();
    const splitWord = word.split('');
    let wordScore = 0;

    splitWord.forEach((char) => {
      switch (char) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
          wordScore += 1;
          break;
        case 'D':
        case 'G':
          wordScore += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          wordScore += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          wordScore += 4;
          break;
        case 'K':
          wordScore += 5;
          break;
        case 'J':
        case 'X':
          wordScore += 8;
          break;
        case 'Q':
        case 'Z':
          wordScore += 10;
          break;
      };
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
