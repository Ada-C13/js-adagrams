const letterBank = {
  A: {
    quantity: 9,
    letterValue: 1
  },
  B: {
    quantity: 2,
    letterValue: 3
  },
  C: {
    quantity: 2,
    letterValue: 3
  },
  D: {
    quantity: 4,
    letterValue: 2
  }, 
  E: {
    quantity: 12,
    letterValue: 1
  },
  F: {
    quantity: 2,
    letterValue: 3
  },
  G: {
    quantity: 3,
    letterValue: 2
  },
  H: {
    quantity: 2,
    letterValue: 4
  },
  I: {
    quantity: 9,
    letterValue: 1
  },
  J: {
    quantity: 1,
    letterValue: 8
  },
  K: {
    quantity: 1,
    letterValue: 5
  },
  L: {
    quantity: 4,
    letterValue: 1
  },
  M: {
    quantity: 2,
    letterValue: 3
  },
  N: {
    quantity: 6,
    letterValue: 1
  },
  O: {
    quantity: 8,
    letterValue: 1
  },
  P: {
    quantity: 2,
    letterValue: 3
  },
  Q: {
    quantity: 1,
    letterValue: 10
  },
  R: {
    quantity: 6,
    letterValue: 1
  },
  S: {
    quantity: 4,
    letterValue: 1
  },
  T: {
    quantity: 6,
    letterValue: 1
  },
  U: {
    quantity: 4,
    letterValue: 1
  },
  V: {
    quantity: 2,
    letterValue: 4
  },
  W: {
    quantity: 2,
    letterValue: 4
  },
  X: {
    quantity: 1,
    letterValue: 8
  },
  Y: {
    quantity: 2,
    letterValue: 4
  },
  Z: {
    quantity: 1,
    letterValue: 10
  },
};

const Adagrams = {
  drawLetters() {
    const lettersDeck = [];

    for (const key in letterBank) {
      for(let i = 0; i < (letterBank[key]['quantity']); i++){
        lettersDeck.push(key);
      }
    }

    lettersDeck.sort(() => Math.random() - 0.5);
    return lettersDeck.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandHash= {};

    lettersInHand.forEach(letter => {
      if (lettersInHandHash[letter]) {
        lettersInHandHash[letter] += 1;
      } else { 
        lettersInHandHash[letter] = 1;
      };
    });

    for (let i = 0; i < input.length; i++) {
      if (lettersInHandHash[input[i]]) {
        lettersInHandHash[input[i]] -= 1;
      } else {
        return false;
      };
    };

    return true;
  },

  scoreWord(word) {
    let wordScore = 0;

    for (let i =0; i < word.length; i++) {
      let upcaseLetter = word.toUpperCase();
      wordScore += letterBank[upcaseLetter[i]]['letterValue'];
    };

    if (word.length >= 7) {
      wordScore += 8;
    };
  
    return wordScore;
  },

  highestScoreFrom(words) {
    let highScore = {
      word: '',
      score: 0
    };

    words.forEach(word => {
      const score = this.scoreWord(word);

      if (score > highScore['score']) {
        highScore['score'] = score;
        highScore['word'] = word;
      } else if (score == highScore['score']) {
        if (word.length == 10 && highScore['word'].length != 10) {
          highScore['word'] = word;
        } else if (
          word.length < highScore['word'].length &&
          highScore['word'].length != 10
        ) {
          highScore['word'] = word;
        }
      }
    });

   return highScore;
  }
};

export default Adagrams;
