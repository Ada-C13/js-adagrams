const Adagrams = {
  drawLetters() {
    const hand = [];
    const letterDistribution = {
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
    };

    const letterPool = [];

    for(const letter in letterDistribution) {      
      for(let i = 0; i < letterDistribution[letter]; i++) {        
        letterPool.push(letter);
      }
    };

    // make hand
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
  }

  // Next, we need a way to check if an input word (a word a player submits) only uses characters that are contained within a collection (or hand) of drawn letters. Essentially, we need a way to check if the word is, indeed, an anagram of some or all of the given letters in the hand.

  // Returns true if every letter in the input word is available (in the right quantities) in the lettersInHand
  // Returns false if not; if there is a letter in input that is not present in the lettersInHand or has too much of compared to the lettersInHand
}

// Do not remove this line or your tests will break!
export default Adagrams;
