// Randomize array in-place using Durstenfeld shuffle algorithm
const shuffleArray = function(array) {
  for (var i = array.length - 1; i > 0; i --) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterQuantities = {
      "A": 9,
      "B": 2,
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T": 6,
      "U": 4,
      "V": 2,
      "W": 2,
      "X": 1,
      "Y": 2,
      "Z": 1
    }
    let letterPool = [];
    // put each letter.value times into pool
    for(const letter in letterQuantities) {
      for(let i = letterQuantities[letter]; i > 0; i --) {
        letterPool.push(letter);
      }   
    }
    // shuffle
    const shuffled = shuffleArray(letterPool.slice(0));
    // hand of 10 letters
    const hand = shuffled.slice(0, 10);
    return hand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;