// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

class Adagrams {
  constructor() {
    this.lettersPool = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };

    this.scoreChart = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q, Z"]
    };
  };

  // Implement this method for wave 1
  drawLetters() {
    const hand = [];
    const lettersPool = this.lettersPool;

    for (const letter in lettersPool) {
      for (let i = 0; i < lettersPool[letter]; i++) {
        hand.push(letter);
      };
    };   

    return this.sample(hand);
  };


  // Helper function for wave 1
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomIdx(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };


  // Helper funciton for wave 1
  sample(letters) {
    const sample = [];

    for(let i = 0; i < 10; i++) { 
      const randomIdx = this.randomIdx(letters.length);
      sample.push(letters[randomIdx]);

      letters.splice(randomIdx, 1); // delete
    }  
    return sample;
  };


  // wave 2
  usesAvailableLetters(input, lettersInHand) {    
    const tempLettersInHand = lettersInHand.slice(0); // clone 

    input = input.toUpperCase();

    for(const char of input) {
      if (!tempLettersInHand.includes(char)) {
        return false;
      };
      
      // if a letter is found, delete the letter from a temp array
      const idx = tempLettersInHand.indexOf(char);
      tempLettersInHand.splice(idx, 1);
    };
    return true;
  };


  // wave 3 
  scoreWord(word) {
    let score = 0;

    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    };

    const scoreChart = this.scoreChart;

    word = word.toUpperCase();

    for (const char of word) {
      for (const point in scoreChart) {
        if (scoreChart[point].includes(char)) {
          score += parseInt(point); 
        };
      };
    };
    return score;
  };


  // Wave 4
  highestScoreFrom(words) {
    
    // Get the highest score
    const scores = words.map(word => this.scoreWord(word));

    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    const maxScore = Math.max(...scores);
  
    const contestant = {
      word: "", 
      score: maxScore
    };

    // Get winning words
    const winningWords = []
    words.forEach(word => {
      if (this.scoreWord(word) === maxScore) {
        winningWords.push(word);
      };
    });

    contestant.word = this.tieBreaker(winningWords);

    return contestant;
  };


  // Helper function for wave 4
  // reference: https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
  tieBreaker(winningWords) {
    return winningWords.reduce((word1, word2) => {

      if (word1.length === 10) return word1;  

      if (word2.length === 10) return word2; 
      
      if (word1.length > word2.length) return word2;

      // When both word1 and word2's length are the same or word1 has a shorter length than word2, return word1
      return word1;
    });
  };
};


// Do not remove this line or your tests will break!
export default Adagrams;

