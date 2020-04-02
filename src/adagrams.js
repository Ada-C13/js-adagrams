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
    // Implement this method for wave 1
    // for loop to create letter pool
    letterPool = []
    for (let [letter, quantity] of Object.entries(letterQuantities)) {
      for(let i = 0; i < quantity; i++) {
            letterPool.push(letter)
          }
    }

    // shuffle letters
    // Fisher-Yates Algorithm - https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb


    // draw letters
    // draw 10 letters - should be an array
    // console log the 10 letters
  },
};



// Do not remove this line or your tests will break!
// export default Adagrams;

