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

  usesAvailableLetters(input, lettersInHand) {
    // can refactor later and use hashtable to make it more efficient...
    // make input in all caps
    input = input.toUpperCase().split('')

    // make copy of letters
    const lettersInHandClone = [...lettersInHand]

    let timesTrue = []

    input.forEach((letter, index) => {
      if (lettersInHandClone.includes(letter) == true) {
        lettersInHandClone.splice(lettersInHandClone.indexOf(letter), 1)
        timesTrue.push(true)
      } else {
        timesTrue.push(false)
      }
    });

    let trueCount = 0
    
    for (let i = 0; i < timesTrue.length; i++) {
      if (timesTrue[i] === true) {
          trueCount++;
      }
    };

    let is_valid = true
    
    if (trueCount === input.length) {
      is_valid = true
    } else {
      is_valid = false
    };

    return is_valid
  },

  scoreWord(word) {
    // uppercase word and make into array
    word = word.toUpperCase().split('');

    let scoring = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10
    };

    let scoreWord = word.map(letter => scoring[letter]);

    //  calculate total score
    let totalScore = scoreWord.reduce((a,b) => a + b, 0)
    //  > 7 letter bonus
    if (word.length >= 7) {
      totalScore = totalScore + 8
    }

    return totalScore
  },

  highestScoreFrom() {

  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

