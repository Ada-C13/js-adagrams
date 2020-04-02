

const Adagrams = {
  drawLetters () {
    const letterPoolNum = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2,
      G: 3, H: 2, I: 9, J: 1, K: 1, L: 4,
      M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
      S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
      Y: 2, Z: 1
    }
  
    let letterPool = [];
  
    for (const letter in letterPoolNum) {
      letterPool = letterPool.concat(Array(letterPoolNum[letter]).fill(letter))
    }

    // Followed the other solutions approach to generate random number https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    let handLetters = [];
    let rand = 0;

    for (let t = 0; t < 10; t++) {
      rand = Math.random() * letterPool.length | 0;
      handLetters.push(letterPool.splice(rand, 1));
    };

    return handLetters;

  },


};

// Do not remove this line or your tests will break!
export default Adagrams;
