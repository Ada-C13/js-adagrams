const Adagrams = {
  drawLetters() {
    const tilesAmount = {
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
      Z: 2
    };


    let tiles = [];
    for (let [key, value] of Object.entries(tilesAmount)) {
      tiles.push(key.repeat(value).split(''));
    }
    tiles = tiles.flat()
    const numberOfTiles = 10;
    //https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
    const shuffled = tiles.sort(() => 0.5 - Math.random());
    let hand = shuffled.slice(0, numberOfTiles);
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let clonedHand = [...lettersInHand];

    for(let i = 0; i < input.length; i++) {
      let letter = input[i];
      if(clonedHand.includes(letter)) {
        clonedHand.splice(clonedHand.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },


  scoreWord(word) {
    const tileValue = {
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
    };
    word = word.toUpperCase().split('')
    let wordScore = 0
    for (let letter of word) {
      wordScore += tileValue[letter];
    }
    if (word.length >= 7) {
      wordScore += 8;
    }
    return wordScore;
  },

  highestScoreFrom(words) {
    let bestScoringWord;
    let bestScore = 0;

    for (let word of words) {
      let score = this.scoreWord(word);
      if (word.length === 10) {
        bestScoringWord = { word: word, score: score };
        break;
      } else if (score > bestScore) {
        bestScore = score;
        bestScoringWord = { word: word, score: score };
      } else if (word.length < bestScoringWord.word.length && score === bestScore) {
        bestScoringWord = { word: word, score: score };
      };
    };
    return bestScoringWord;
  }
}
// Do not remove this line or your tests will break!
export default Adagrams;