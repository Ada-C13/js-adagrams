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
    // loop through value of each letter to create pool
    for(const letter in this.letterDistribution) {      
      for(let i = 0; i < this.letterDistribution[letter]; i++) {        
        letterPool.push(letter);
      }
    };

    // create a hand of ten random letters
    const hand = [];
    for(let i = 0; i < 10; i++) {
      const randomNum = this.random(letterPool);
      hand.push(letterPool[randomNum]);
      letterPool.splice(randomNum, 1);      
    }

    return hand;    
  },
  // helper method that returns a random number between 0 and length of array
  random(letterPool) {
    return Math.floor(Math.random() * (letterPool.length+1));
  },
  usesAvailableLetters(input, lettersInHand) {
    input = input.split('');
    let result = true;

    input.forEach(letter => {
      if(lettersInHand.includes(letter)) {
        // find the first index that matches the letter
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
    if (word === '') return 0;
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
    let points = 0;
    word = word.toUpperCase().split('');
    
    word.forEach(element => points += scoring[element]);
    if(word.length >= 7) points += 8;

    return points;
  },

  // find the highest scoring word
  highestScoreFrom(words) {
    // create array of all word scores
    const scores = words.map(word => this.scoreWord(word));
    // find highest score
    const highestScore = Math.max(...scores);
    const winningWord = {score: highestScore};    
    const highestScoringWords = [];
    
    // add all words with highest score to an array
    words.forEach ((word, i) => {
      if (scores[i] === highestScore) highestScoringWords.push(word);
    });

    // if there is only one word,
    // set winningWord to that word
    if (highestScoringWords.length === 1) {
      winningWord['word'] = highestScoringWords[0];
    } else {
      // find first word with 10 characters
      const tenCharacters = highestScoringWords.find(word => word.length === 10);
      if (tenCharacters) {
        winningWord['word'] = tenCharacters;
      } else {
        // a is current word, b is the following word
        // if a.length is less than b.length, replace current value with a. else replace with b
        winningWord['word'] = highestScoringWords.reduce((a, b) => a.length <= b.length ? a : b);
      }
    };

    return winningWord;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
