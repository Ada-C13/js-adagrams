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
    for (const char in this.LETTERS) {
      for (let i=0; i<this.LETTERS[char]['num']; i++) letterPool.push(char);
    };

    const drawn = [];
    for (let i=0; i<10; i++) {
      let char = letterPool[Math.floor(Math.random()*letterPool.length)];
      // if the letter is unavailable, assign a new random letter
      while (this.LETTERS[char]['num'] < 1) char = letterPool[Math.floor(Math.random()*letterPool.length)];
      // if the letter is available, add it to the hand and decrement the number available 
      drawn[i] = char;
      this.LETTERS[char]['num']--;
    };

    return drawn;
  },
  usesAvailableLetters(input, lettersInHand) {
    // create hashmap for input
    const inputCharCount = {};
    for (let i=0; i<input.length; i++) {
      (inputCharCount[input[i]]) ? inputCharCount[input[i]]++ : inputCharCount[input[i]] = 1;  
    };
    
    // create hashmap for lettersInHand
    const handCharCount = {};
    for (let i=0; i<lettersInHand.length; i++) {
      (handCharCount[lettersInHand[i]]) ? handCharCount[lettersInHand[i]]++ : handCharCount[lettersInHand[i]] = 1;    
    };

    // checks if the letter is available in hand
    for (const char in inputCharCount) {
      if (!handCharCount[char] || handCharCount[char] < inputCharCount[char]) return false;
    };

    return true;
  },
  scoreWord(word) {
    let score = 0;
    word = word.toUpperCase().split('');
    word.forEach(char => score += this.LETTERS[char]['val']);
    if (word.length >= 7) score += 8;

    return score;
  },
  highestScoreFrom(words) {
    class WordData {
      constructor(word, score) {
        this.word = word;
        this.score = score;
      };
    };

    const wordsWithScores = [];
    words.forEach(word => wordsWithScores.push(new WordData(word, this.scoreWord(word))));

    let max = Math.max.apply(null, wordsWithScores.map(wordData => wordData.score));

    const winners = wordsWithScores.filter(wordData => {
      if (wordData.score === max) return wordData;
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