// Randomize array in-place using Durstenfeld shuffle algorithm
const shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i --) {
    // set j as random number
    let j = Math.floor(Math.random() * (i + 1));
    // swap original indices with j
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Adagrams = {
  LETTER_QUANTITIES: {
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
  },

  LETTER_VALUES: {
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
  },

  drawLetters() {
    let letterPool = [];
    // push letters by quantity into pool
    for(const letter in Adagrams.LETTER_QUANTITIES) {
      for(let i = Adagrams.LETTER_QUANTITIES[letter]; i > 0; i --) {
        letterPool.push(letter);
      }   
    }
    // shuffle
    const shuffled = shuffleArray(letterPool.slice(0));
    // hand of 10 letters
    const hand = shuffled.slice(0, 10);
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.split('');
    // for each letter in inputArray, check for match in hand
    let hand = lettersInHand.slice(0);
    return inputArray.every((letter) => {
      // if letter doesn't exist in hand return false
      if(hand.indexOf(letter) === -1) return false;
      // delete letter from hand to avoid repeats
      delete hand[hand.indexOf(letter)];
      return true;
    });
  },

  scoreWord(word) {
    let totalScore = 0;
    if(word.length > 6) totalScore += 8;
    const wordArray = word.toUpperCase().split('');
    for(const letter in wordArray) {
      totalScore += Adagrams.LETTER_VALUES[wordArray[letter]]
    }
    return totalScore;
  },

  highestScoreFrom(words) {
    let highestScore = 0;
    let winningWords = [];
    for(const word in words) {
      if(this.scoreWord(words[word]) > highestScore) {
        highestScore = this.scoreWord(words[word]);
        winningWords = ([words[word]]);
      } else if(this.scoreWord(words[word]) == highestScore) {
        winningWords.push(words[word]);
      }
    }
    // no tie scenario
    if(winningWords.length == 1) {
      return { word: winningWords[0], score: highestScore };
    } else { // tie scenario
      for(const word in winningWords) { // determines whether word is 10 letters long
        if(winningWords[word].length == 10) {
          return { word: winningWords[word], score: highestScore };
        }
      }
      // if there is no 10 letter word, find shortest word
      let winner = winningWords[0];
      for(const word in winningWords) {
        if(winningWords[word].length < winner.length) {
          winner = winningWords[word]
        }
      }
      return { word: winner, score: highestScore };
    }
  }
};

// This line is needed for tests
export default Adagrams;