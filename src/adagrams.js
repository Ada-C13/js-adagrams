

const Adagrams = {
  createLetterPool () {
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
    };

    return letterPool
  },
  drawLetters () {
    const letterPool = this.createLetterPool()

    // Followed the other solutions approach to generate random number https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    let handLetters = [];
    let rand = 0;

    for (let t = 0; t < 10; t++) {
      rand = Math.random() * letterPool.length | 0;
      handLetters.push(letterPool.splice(rand, 1).toString());
    };

    return handLetters;
  },
  // convertArrayToObject (array) {
  //   return array.reduce((ac,a) => ({...ac,[a]:true}),{});
  // },
  usesAvailableLetters (input, lettersInHand) {
    for (let i = 0; i < input.length; i++) {
      if (!lettersInHand.includes(input[i].toUpperCase())) {
        return false
      };
      let index = lettersInHand.indexOf(input[i].toUpperCase());
      lettersInHand.splice(index,1)
    }
    
    return true;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
