const Adagrams = {
  LETTERS: {
    'A': {num: 9, val: 1}, 
    'B': {num: 2, val: 3}, 
    'C': {num: 2, val: 3}, 
    'D': {num: 4, val: 2}, 
    'E': {num: 12, val: 1}, 
    'F': {num: 2, val: 4}, 
    'G': {num: 3, val: 2}, 
    'H': {num: 2, val: 4}, 
    'I': {num: 9, val: 1}, 
    'J': {num: 1, val: 8}, 
    'K': {num: 1, val: 5}, 
    'L': {num: 4, val: 1}, 
    'M': {num: 2, val: 3}, 
    'N': {num: 6, val: 1}, 
    'O': {num: 8, val: 1}, 
    'P': {num: 2, val: 3}, 
    'Q': {num: 1, val: 10}, 
    'R': {num: 6, val: 1}, 
    'S': {num: 4, val: 1}, 
    'T': {num: 6, val: 1}, 
    'U': {num: 4, val: 1}, 
    'V': {num: 2, val: 4}, 
    'W': {num: 2, val: 4}, 
    'X': {num: 1, val: 8}, 
    'Y': {num: 2, val: 4}, 
    'Z': {num: 1, val: 10},
  },
  drawLetters() {
    // this ensures a more weighted distribution
    const letterPool = [];
    for (const letter in this.LETTERS) {
      for (let i=0; i<this.LETTERS[letter]['num']; i++) {
        letterPool.push(letter);
      };
    };

    const drawn = [];
    for (let i=0; i<10; i++) {
      let letter = letterPool[Math.floor(Math.random()*letterPool.length)];

      // if the number available in the pool is less than 1, a new random value is assigned to letter
      while (this.LETTERS[letter]['num'] < 1) {
        letter = letterPool[Math.floor(Math.random()*letterPool.length)];
      };

      // if the letter is available, it is added to the hand and the number available in the pool is decremented 
      drawn[i] = letter;
      this.LETTERS[letter]['num'] -= 1;
    };

    return drawn;
  },
  usesAvailableLetters(input, lettersInHand) {
    // convert input string to object, use hashmap function to lookup if input is included in lettersInHand at expected quantities
    const inputLetterCount = {};
    for (let i=0; i<input.length; i++) {
      if (inputLetterCount[input[i]]) {
        inputLetterCount[input[i]] += 1;
      } else {
        inputLetterCount[input[i]] = 1;
      };
    };

    const handLetterCount = {};
    for (let i=0; i<lettersInHand.length; i++) {
      if (handLetterCount[lettersInHand[i]]) {
        handLetterCount[lettersInHand[i]] += 1;
      } else {
        handLetterCount[lettersInHand[i]] = 1;
      };
    };

    // returns false if input is not included in lettersInHand (null or 0?)
    // returns false when input contains letters repeated more than in lettersInHand
    // otherwise, returns true
    for (const key in inputLetterCount) {
      if (!handLetterCount[key] || handLetterCount[key] < inputLetterCount[key]) { 
        return false;
      };
    };

    return true;
  },
  scoreWord(word) {
    // change word to uppercase
    // split word into array of letters
    // if word length is 7, 8, 9, 10, add 8 points
    // else loop thru letters array, lookup value in LETTERS pool and add to score
    let score = 0;
    word = word.toUpperCase().split('');
    word.forEach(letter => score += this.LETTERS[letter]['val']);

    if (word.length >= 7) {
      score += 8;
    };

    return score;
  },
  highestScoreFrom(words) {
    // words is an array of strings
    // create an object for each element in words: {word: string of a word, score: score of that word}
    const Object = function(word, score) {
      this['word'] = word;
      this['score'] = score; 
    };

    const wordsWithScores = [];
    words.forEach(word => {
      const score = this.scoreWord(word);
      wordsWithScores.push(new Object(word, score));
    });

    let highest = 0;
    wordsWithScores.forEach(word => {
      if (word['score'] > highest) {
        highest = word['score'];
      };
    });

    const winners = [];
    wordsWithScores.forEach(word => {
      if (word['score'] === highest) {
        winners.push(word);
      };
    });

    // in the case of a tie: 1) word with 10 letters, 2) word with the fewest letters, 3) first word in the list; return only broke out of one loop, not the whole next, so forEach wasn't working! I needed to wrap the tiebreaking logic into a function, pull out the object into an array and return the first element of the array out of the function
    const tieBreaker = (arr) => {
      arr.sort((a, b) => b.word.length - a.word.length);
      const shortestLength = arr[arr.length-1].word.length;

      const tieWinner = arr.filter(object => {
        switch (object.word.length) {
          case 10:
            return object;
          case shortestLength:
            return object;
        }
      });

      return tieWinner[0];
    };

    if (winners.length === 1) {
      return winners[0];
    } else {
    return tieBreaker(winners);
    };
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;