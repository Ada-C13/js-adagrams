const scoreSystem = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

const letterPoolNum = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2,
  G: 3, H: 2, I: 9, J: 1, K: 1, L: 4,
  M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
  S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
  Y: 2, Z: 1
};

const Adagrams = {
  createLetterPool () {
    const letterPool = [];
  
    for (const letter in letterPoolNum) {
      letterPool.push(...Array(letterPoolNum[letter]).fill(letter));
    }

    return letterPool;
  },
  drawLetters () {
    const letterPool = this.createLetterPool();

    // Followed the other solutions approach to generate random number https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    const handLetters = [];

    for (let t = 0; t < 10; t++) {
      const rand = Math.random() * letterPool.length | 0;
      handLetters.push(letterPool.splice(rand, 1)[0]);
    }

    return handLetters;
  },
  usesAvailableLetters (input, lettersInHand) {
    // try to do this without making a copy AND not mess with input
    const handLetters = lettersInHand.slice();

    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toUpperCase();
      const index = handLetters.indexOf(letter);
      if (index === -1) {
        return false;
      }
      handLetters.splice(index, 1);
    }
    
    return true;
  },
  scoreWord (word) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += scoreSystem[word[i].toUpperCase()];
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },
  scoringRulesGeneral (item) {
    // Create variables to track highest word/score
    let highScoreWord = [];
    let highScore = 0;

    // item.forEach(word => {
    //   const score = this.scoreWord(word);

    //   if (score > highScore) {
    //     highScoreWord = [word];
    //     highScore = score;
    //   } else if (score === highScore) {
    //     highScoreWord.push(word);
    //   }
    // });

    for (const word of item) {
      const score = this.scoreWord(word);

      if (score > highScore) {
        highScoreWord = [word];
        highScore = score;
      } else if (score === highScore) {
        highScoreWord.push(word);
      }
    }

    return highScoreWord;
  },
  scoringRulesTie (item) {
    let shortestWord = item[0];

    for (const word of item) {
      if (word.length === 10) {
        return word;
      } else if (shortestWord.length > word.length) {
        shortestWord = word;
      }
    }

    return shortestWord;
  },
  highestScoreFrom (words) {
    // Gets list of high scoring words and tie breaks them 
    const highWordList = this.scoringRulesGeneral(words);
    const highScoreWord = (highWordList.length === 1) ? highWordList[0] : this.scoringRulesTie(highWordList);

    // Calculates high schore and returns word/score as object
    const highScore = this.scoreWord(highScoreWord);
    const finalScore = {word: highScoreWord, score: highScore};

    return finalScore;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
