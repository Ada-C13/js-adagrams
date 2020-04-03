const Adagrams = {
  //WAVE 1
  drawLetters() {
    const allLetters = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    };
    let lettersPool = [];
    Object.keys(allLetters).forEach(letter => {
      for (let i = 0; i < allLetters[letter]; i++) {
        lettersPool.push(letter);
      }
    });

    let handLetters = [];
    for (let i = 0; i < 10; i++) {
      handLetters.push(
        lettersPool[Math.floor(Math.random() * lettersPool.length)]
      );
    }
    return handLetters;
  },

   //WAVE 2
   usesAvailableLetters(input, lettersInHand) {
    const letterBank = lettersInHand.map((x) => x);
    const letters = input.toUpperCase().split('')

  for(let i = 0; i < letters.length; i++) {
    if (letterBank.includes(letters[i])) {
      letterBank.splice(letterBank.indexOf(letters[i]), 1);
    } else {
      return false 
    } 
  };
    return true; 
  }, 

// Do not remove this line or your tests will break!
export default Adagrams;
