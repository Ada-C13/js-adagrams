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

const letterValues = {
  "A": 1,	
  "B": 3,	
  "C": 3,	
  "D": 2,	
  "E": 1,	
  "F": 4,
  "G": 2,	
  "H": 4,	
  "I": 1,	
  "J": 8,	
  "K": 5,	
  "L": 1,	
  "M": 3,	
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10
};

// Credit for shuffling function described at
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shuffle = function(array) {
  for (let r = array.length - 1; r > 0; r--) {
    const s = Math.floor(Math.random() * (r + 1));
    [array[r], array[s]] = [array[s], array[r]];
  }
};

const Adagrams = {

  // Wave 1
  drawLetters() {
    let pool = [];
    for (let i in letters) {
      for (let j = letters[i]; j > 0; j--) {
        pool.push(i);
      }
    }
  
    shuffle(pool);

    //discards extra tiles so only 10 remain in pool array
    return pool.splice(88);
  },

  // Wave 2
  usesAvailableLetters(input, drawn) {
    for (let i = 0; i < input.length; i++) {
      let currentLetter = input.charAt(i);
      if (!drawn.includes(currentLetter)) {
        return false;
      } else {
        //find the index where letter IS found 
        // have var outside of false check and have it equal index of current letter, then use splice at that index
        let letterIndex = drawn.indexOf(currentLetter);
        // splice letter at that index from drawn
        drawn.splice(letterIndex, 1);
      }
    }
    return true;
  },

  // Wave 3
  scoreWord(word) {
    let totalPoints = 0;
    const lettersToScore = word.toUpperCase();
    if (lettersToScore.length >= 7) {
      totalPoints += 8;
    }
    // for each item in lettersToScore, find the associated value in letterValues and add to totalPoints
    for (let i = 0; i < lettersToScore.length; i++) {
      let currentLetter = lettersToScore.charAt(i);
      let scoreToAdd = letterValues[currentLetter];
      totalPoints += scoreToAdd;
    }
  
    return totalPoints;
  },

  // Wave 4

};

// Do not remove this line or your tests will break!
export default Adagrams;