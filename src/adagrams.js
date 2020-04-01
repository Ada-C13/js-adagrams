const Adagrams = {
  drawLetters() {
    const pool = {
      A: 9,
      N: 6,
      B: 2,
      O: 8,
      C: 2,
      P: 2,
      D: 4,
      Q: 1,
      E: 12,
      R: 6,
      F: 2, 
      S: 4,
      G: 3, 
      T: 6,
      H: 2, 
      U: 4,
      I: 9, 
      V: 2,
      J: 1, 
      W: 2,
      K: 1, 
      X: 1,
      L: 4, 
      Y: 2,
      M: 2, 
      Z: 1,
    };
    const hand = [];
    const letters = Object.keys(pool);
    const getRand0to25 = () =>  Math.floor(Math.random() * Math.floor(25));
    while(hand.length < 10) {
      const currentLetter = letters[getRand0to25()];
      if (pool[currentLetter] !== 0) {
        hand.push(currentLetter);
        pool[currentLetter]--;
      }
    }
    return hand;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
