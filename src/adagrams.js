const Adagrams = {
  drawLetters: function() {
    const letterDist = {
      A : 9, 
      B : 2,  
      C : 2,  
      D : 4,  
      E : 12, 
      F : 2,  
      G : 3,  
      H : 2, 
      I : 9,
      J : 1, 
      K : 1, 
      L : 4,  
      M : 2,  
      N : 6,
      O : 8,
      P : 2,
      Q : 1,
      R : 6,
      S : 4,
      T : 6,
      U : 4,
      V : 2, 
      W : 2,
      X : 1,
      Y : 2,
      Z : 1
    };
    let letterPool = []
    // create letterPool
    for (const letter in letterDist) {
      for (let i = 0; i < letterDist[letter]; i++) {
        letterPool.push(letter);
      } 
    }
    // shuffle letterPool
    let letterPoolClone = letterPool.map((x) => x);
    let m = letterPoolClone.length;
    let t = null;
    let i = null;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = letterPoolClone[m];
      letterPoolClone[m] = letterPoolClone[i];
      letterPoolClone[i] = t;
    }
  const chosenLetters = letterPoolClone.slice(0,10);
  return chosenLetters;
  },


};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.drawLetters())
