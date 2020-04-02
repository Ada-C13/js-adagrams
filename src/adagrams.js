const letters = {
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
};

// Credit for shuffling function described at
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shuffle = function(array) {
  for (let r = array.length - 1; r > 0; r--) {
    const s = Math.floor(Math.random() * (r + 1));
    [array[r], array[s]] = [array[s], array[r]];
  }
}

const Adagrams = {
  
  drawLetters() {
    let pool = [];
    for (let i in letters) {
      for (let j = letters[i]; j > 0; j--) {
        pool.push(i);
      }
    }
  
    shuffle(pool);

    //discards extra tiles so only 10 remain
    return pool.splice(88);
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
