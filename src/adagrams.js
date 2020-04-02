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
  usesAvailableLetters(input, lettersInHand) {
    const word = input.toUpperCase();
    const match = lettersInHand
    for(let i = 0; i < word.length; i++) {
      if (match.includes(word[i])) {
        const index = match.indexOf(word[i]);
        match.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  },
  scoreWord(word) {
    let totalScore = 0;
    word = word.toUpperCase();
    const scores = {
      A: 1,
      N: 1,
      B: 3,
      O: 1,
      C: 3,
      P: 3,
      D: 2,
      Q: 10,
      E: 1,
      R: 1,
      F: 4, 
      S: 1,
      G: 2, 
      T: 1,
      H: 4, 
      U: 1,
      I: 1, 
      V: 4,
      J: 8, 
      W: 4,
      K: 5, 
      X: 8,
      L: 1, 
      Y: 4,
      M: 3, 
      Z: 10,
    }
    for(let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      totalScore += scores[currentLetter];
    }
    if (word.length > 6) {
      totalScore += 8;
    }
    return totalScore;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
