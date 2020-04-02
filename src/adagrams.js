

const Adagrams = {
  createLetterPool () {
    const letterPoolNum = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2,
      G: 3, H: 2, I: 9, J: 1, K: 1, L: 4,
      M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
      S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
      Y: 2, Z: 1
    }
  
    let letterPool = [];
  
    for (const letter in letterPoolNum) {
      letterPool = letterPool.concat(Array(letterPoolNum[letter]).fill(letter))
    };

    return letterPool
  },
  drawLetters () {
    const letterPool = this.createLetterPool()

    // Followed the other solutions approach to generate random number https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    let handLetters = [];
    let rand = 0;

    for (let t = 0; t < 10; t++) {
      rand = Math.random() * letterPool.length | 0;
      handLetters.push(letterPool.splice(rand, 1).toString());
    };

    return handLetters;
  },
  // convertArrayToObject (array) {
  //   return array.reduce((ac,a) => ({...ac,[a]:true}),{});
  // },
  usesAvailableLetters (input, lettersInHand) {
    for (let i = 0; i < input.length; i++) {
      if (!lettersInHand.includes(input[i].toUpperCase())) {
        return false
      };
      let index = lettersInHand.indexOf(input[i].toUpperCase());
      lettersInHand.splice(index,1)
    }
    
    return true;
  },
  scoreWord (word) {
    const scoreSystem = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10
    };
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += scoreSystem[word[i].toUpperCase()]
    };

    if (word.length >= 7) {
      score += 8
    };

    return score;
  },
  scoringRulesGeneral (item) {
    // Create variables to track highest word/score
    let highScoreWord = [];
    let highScore = 0;

    for (let i = 0; i < item.length; i++) {
      if (this.scoreWord(item[i]) > highScore) {
        highScoreWord = [item[i]];
        highScore = this.scoreWord(item[i]);
      }
  
      // Else if same, append word to highScoreWord array
      else if (this.scoreWord(item[i]) === highScore) {
        highScoreWord.push(item[i]);
      };
    };

    return highScoreWord
  },
  scoringRulesTie (item) {
    let shortestWord = item[0];
    for (let i = 0; i < item.length; i++) {
      if (item[i].length === 10) {
        return shortestWord = item[i]
      }
      else if (shortestWord.length > item[i].length) {
        shortestWord = item[i]
      }
    };

    return shortestWord;
  },
  highestScoreFrom (words) {

    // GENERAL RULES //
    // Create loop off of array of words
    let highWordList = this.scoringRulesGeneral(words);
    let highScoreWord = null;

    // TIE BREAKER RULES //
    if (highWordList.length === 1) {
      highScoreWord = highWordList[0]
    }
    else {
      highScoreWord = this.scoringRulesTie(highWordList)
    };

    let highScore = this.scoreWord(highScoreWord);
    let finalScore = {word: highScoreWord, score: highScore}
    return finalScore

    // Tie Breaker Rules
    // Create empty object to track tie score
    // If the final set of score has more than one pair use this logic
    // Loop through all elements within the object
    // If word has 10 letters, immediately return the result
    // Else compare score with current tie score
    // If length of of word is shorter, replace tie

    // Return result as object (key is word, value i score)

    
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
