const Adagrams = {

  // Implement this method for wave 1
  letters_pool: {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  },

  scoreChart: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q, Z"]
  },

  drawLetters() {
    let hand = [];
     
    const letters_pool = this.letters_pool
    for (const letter in letters_pool) {
      for (let i = 0; i < letters_pool[letter]; i++) {
        hand.push(letter);
      }
    };   

    hand = this.shuffle(hand)
    hand.splice(10);

    return hand;
  },

  // Helper function for wave 1
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomIdx(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  // Helper funciton for wave 1
  // reference: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(array) {
    for(let i = 0; i < 10; i++) { // 10 times
      let j = this.randomIdx(array.length);
      [array[i], array[j]] = [array[j], array[i]]
    };
    return array;
  },


  // wave 2
  usesAvailableLetters(input, lettersInHand) {
    // edge case
    if (input.length > 10 || input.length < 1) {
      return false;
    }
    
    const tempLettersInHand = lettersInHand.splice(0) // clone 

    for(let i = 0; i < input.length; i++) {
      if (!tempLettersInHand.includes(input[i])) {
        return false;
      }
      
      // if a letter is found, delete a letter from a temp array
      const idx = tempLettersInHand.indexOf(input[i]);
      tempLettersInHand.splice(idx, 1);
    };

    return true;
  },

  // wave 3 
  scoreWord(word) {
    let score = 0;

    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }

    const scoreChart = this.scoreChart;

    for (let i = 0; i < word.length; i++) {
      // TODO
      const letter = word[i].toUpperCase();

      for (const point in scoreChart) {
        if (scoreChart[point].includes(letter)) {
          score += parseInt(point);
        };
      };
    };

    return score;
  },


  // Wave 4
  highestScoreFrom(words) {
    
    // Get highest score
    words.sort((a, b) => this.scoreWord(a) - this.scoreWord(b));
    const maxScore = this.scoreWord(words[words.length - 1])


    const contestant = {
      word: "", 
      score: maxScore
    }

    // Get winning words
    const winningWords = []
    words.forEach(word => {
      if (this.scoreWord(word) === maxScore) {
        winningWords.push(word);
      };
    })

    contestant.word = this.tieBreaking(winningWords);

    return contestant;
  },

  // Helper function for wave 4
  // reference: https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
  tieBreaking(winningWords) {
    return winningWords.reduce((a, b) => {

      if (a.length === 10) {
        return a; // cannot do contestant[word] => why?
      }  

      if (b.length === 10) {
        return b;
      }

      
      if (a.length > b.length) {
        return b;
      }

      // When length is the same or a has a shorter length
      return a;
    })
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
