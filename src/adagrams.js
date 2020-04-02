// make letters and quantities as a hash
let letterQuantities = {
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

const Adagrams = {
  drawLetters() {
    // creating letterPool
    let letterPool = []
    for (let [letter, quantity] of Object.entries(letterQuantities)) {
      for(let i = 0; i < quantity; i++) {
            letterPool.push(letter)
          }
    }

    // shuffle letters
    // Fisher-Yates Algorithm - https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for(let i = (letterPool.length) - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = letterPool[i]
      letterPool[i] = letterPool[j]
      letterPool[j] = temp
    }

    // draw letters
    let drawnLetters = letterPool.slice(0, 10);
    return drawnLetters
  },
  
  usesAvailableLetters() {

  },

  scoreWord() {

  },

  highestScoreFrom() {

  }
};


// Do not remove this line or your tests will break!
export default Adagrams;

