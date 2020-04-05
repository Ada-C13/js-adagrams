
class Adagrams  {

  constructor() {
    // this.poolLetters = this.buildPoolLetters(); //generate pool in constructor if changed below to instance methods
  }

  static drawLetters() {
    const classPool = this.buildPoolLetters();
    const lettersInHand = this.getSample(10, classPool);  //use this.poolLetters as argument if changed to instance method
    return lettersInHand;
  }

  static usesAvailableLetters(input, lettersInHand) {
    const splitInput = input.toUpperCase().split('');
    const tenLetters = this.arrayToObject(lettersInHand);
    
    for (let char of splitInput) {
      if (tenLetters[char]) {
        tenLetters[char] -= 1;
      } else {       //if tenLetters[char] === 0 or char not found in tenLetters object
        return false;  
      }
    }
 
    return true;
  }

  static scoreWord(word) {
    let score = 0;
    const splitWord = word.toUpperCase().split('');

    for (let char of splitWord) {
      score += this.pointsPerLetter[char];
    }

    if (word.length > 6) {
      score += 8;
    }

    return score;
  }

  static highestScoreFrom(words) {
    let highest = {word: "", score: 0};
    
    for (let word of words) {
      const currentScore = this.scoreWord(word);
      if (currentScore > highest.score) {
        highest.word = word;
        highest.score = currentScore;
      } else if (currentScore === highest.score) {
        if (word.length === 10 && highest.word.length !== 10) {
          highest.word = word;
          highest.score = currentScore;
        } else if (word.length < highest.word.length && highest.word.length !== 10) {
          highest.word = word;
          highest.score = currentScore;
        }
      }
    }

    return highest;
  }

  static buildPoolLetters() {
    const pool = [];

    for (const [letter,quant] of Object.entries(this.letterQuantities)) {
      for (let i = 0; i < quant; i++) {
        pool.push(letter);
      }
    }

    return pool;
  }

  static getSample(total, paramsArray) {
    let inputArray = paramsArray.slice();  //clone a new array to manipulate
    const sampleArray = [];
    for (let i = 0; i < total; i++) {
      const randomIndex = Math.floor(Math.random() * (inputArray.length - i)); //source: similar to Fisher-Yates shuffle logic
      sampleArray.push(inputArray[randomIndex]);
      inputArray[randomIndex] = inputArray[inputArray.length - 1 - i];  //replace chosen element with last element
    }
    return sampleArray;
  }

  static arrayToObject(array) {
    const newObject = {};
    for (let element of array) {
      if (newObject[element]) {
        newObject[element] += 1;
      } else {
        newObject[element] = 1;
      }
    }
    return newObject;
  }

  static letterQuantities = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2, 
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1
  };

  static pointsPerLetter = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4, 
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10
  };
}

// Do not remove this line or your tests will break!
export default Adagrams;
