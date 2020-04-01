const Adagrams = {
  drawLetters() {
    const letterValues = {
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
      Z: 1,
    };
    //make an array containing all available letters 
    let sample = Object.entries(letterValues).map(function ([key , value]){
      return key.repeat(value).split('');
    })

    sample = sample.flat()

    const lettersAtHand = []

    for (let i = 0; i < 10; i++){
      lettersAtHand.push(sample[Math.floor(Math.random()* sample.length)]);
    };
    return lettersAtHand  
  },
};

// Adagrams.drawLetters()


// Do not remove this line or your tests will break!
export default Adagrams;
