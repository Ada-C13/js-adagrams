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
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
