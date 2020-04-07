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
    // ensure a more weighted distribution
    const letterPool = [];
    for (const char in this.LETTERS) {
      for (let i=0; i<this.LETTERS[char]['num']; i++) letterPool.push(char);
    };

    const drawn = [];
    for (let i=0; i<10; i++) {
      let char = letterPool[Math.floor(Math.random()*letterPool.length)];

      // if the letter is unavailable, assign a new random letter
      while (this.LETTERS[char]['num'] < 1) char = letterPool[Math.floor(Math.random()*letterPool.length)];

      // if the letter is available, add it to the hand and decrement the number available in the pool
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

    // check if the letter is available in hand
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

    // create an array of WordData objects
    const wordsWithScores = words.map(word => {
      return new WordData(word, this.scoreWord(word));
    });

    const maxScore = Math.max.apply(null, wordsWithScores.map(wordData => wordData.score));

    // filter all WordData objects that contain the max score
    const winners = wordsWithScores.filter(wordData => {
      if (wordData.score === maxScore) return wordData;
    });

    // helper function that handles the tie-breaking logic: 1) 10-letter words, 2) shortest word, 3) first word in list
    const tieBreaker = (winners) => {
      winners.sort((a, b) => b.word.length - a.word.length); // sort from longest to shortest; without this, the function will not prioritize 10-letter words
      const shortestLength = winners[winners.length-1].word.length;

      const tieWinner = winners.filter(wordData => {
        switch (wordData.word.length) {
          case 10:
            return wordData;
          case shortestLength:
            return wordData;
        };
      });

      return tieWinner[0];
    };

    return (winners.length === 1) ? winners[0] : tieBreaker(winners); // if there's only one winner, tieBreaker() is not needed
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;