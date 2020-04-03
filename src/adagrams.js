const Adagrams = {
  letterDistribution: {
    A : 9,
    N : 6,
    B : 2,
    O : 8,
    C : 2,	
    P : 2,
    D : 4,	
    Q : 1,
    E : 12,
    R : 6,
    F : 2,	
    S : 4,
    G : 3,	
    T : 6,
    H : 2,	
    U : 4,
    I : 9,	
    V : 2,
    J : 1,	
    W : 2,
    K : 1,	
    X : 1,
    L : 4,	
    Y : 2,
    M : 2,	
    Z : 1
  },
  drawLetters() {
    const letterPool = [];
    for(const letter in this.letterDistribution) {      
      for(let i = 0; i < this.letterDistribution[letter]; i++) {        
        letterPool.push(letter);
      }
    };

    const hand = [];
    for(let i = 0; i < 10; i++) {
      const randomNum = this.random(letterPool);
      hand.push(letterPool[randomNum]);
      letterPool.splice(randomNum, 1);      
    }

    // add letters back to pool
    for(let i = 0; i < 10; i++) {
      letterPool.push(hand[i]);
    }

    return hand;    
  },
  random(letterPool) {
    return Math.floor(Math.random() * (letterPool.length+1));
  },
  usesAvailableLetters(input, lettersInHand) {
    input = input.split('');
    let result = true;

    input.forEach(letter => {      
      if(lettersInHand.includes(letter)) {
        let index = lettersInHand.findIndex(element => element === letter);        
        lettersInHand.splice(index, 1);        
      } else {
        result = false;        
        return;
      }
    })

    return result;
  },
  scoreWord(word) {
    if (word === '') {
      return 0;
    }

    const scoring = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    };    
    word = word.toUpperCase().split('');
    let points = 0;

    word.forEach(element => {
      points += scoring[element];
    });

    if(word.length >= 7) {
      points += 8;
    };

    return points;
  },

  // find the highest scoring word. This function looks at the array of words and calculates which of these words has the highest score, applies any tie-breaking logic, and returns the winning word in a special data structure.

  // Objective
  // Add a function named highestScoreFrom in the Adagrams object in src/adagrams.js. This method should have the following properties:
  highestScoreFrom(words) {
    const winningWord = {/* word: score */};

    // add an instance variable to Adagrams to keep track of words and scores
    
    // find highest score
    // add words with highest score to an object
    // if array.length === 1
    //   return that word
    // else continue to tie breaker

    // if tie
    //   if any word has .length === 10
    //     winningWord = that word;
    //   else 
    //     shortest word should win
    //     set a variable to length of first word
    //     loop through the array and check the length of each word
    //       if the length is shorter than the previous shortest length,
    //       change shortest length to that length
    //       continue
    //     end
    //     set winningWord to first word that matches the shortest length
    //     find score of that word again
    //     set word & score to winningWord
    //   end
    // end

    return winningWord;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
