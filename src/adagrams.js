
const Adagrams = {
  drawLetters() {
    const allLetters = {
  //pool of available letters and the qty they each have
      A : 9,
      B : 2, 
      C : 2, 
      D : 4, 
      E : 12, 
      F : 2, 
      G : 3, 
      H : 2, 
      I : 9, 
      J : 1, 
      K : 1, 
      L : 4, 
      M : 2, 
      N : 6, 
      O : 8, 
      P : 2, 
      Q : 1, 
      R : 6, 
      S : 4, 
      T : 6, 
      U : 4, 
      V : 2, 
      W : 2, 
      X : 1, 
      Y : 2, 
      Z : 1
    };
    
    //wave 1
  //   const createTiles = function(letterUsed) {
  //     let tileArray = [];
  //     for (let key in letterUsed) {
  //       const letters = key.repeat(letterUsed[key]).split("");
  //         tileArray = tileArray.concat(letters);
  //     }
  //     return tileArray
  //   },

    hand = [];
    let letters = allLetters
    for (let i = 0; i < 10; i ++) {
      let index = Math.floor(Math.random() * letters.length -1);
      let rand = letters[index];
      hand.push(rand);
      // letters.splice(index, 1);
    }
    return hand;
  },

    //wave 2
    usesAvailableLetters(input, lettersInHand) {  
      let result = true;
  
      for (let i = 0; i < (input.length); i++) {
        if (lettersInHand.includes(input[i]) === false) {
          return false;
        }
        else {
          lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
        }
      }
      return result;
    },
 
  //wave 3
  scoreWord(word) {
    const playedWord = word.toUpperCase().split('');
    let score = 0;
    playedWord.forEach(function(letter) {
      switch (letter) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        case "L":
        case "N":
        case "R":
        case "S":
        case "T":
          score += 1;
          break;
        case "D":
        case "G":
          score += 2;
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          score += 3;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          score += 4;
          break;
        case "K":
          score += 5;
          break;
        case "J":
        case "X":
          score += 8;
          break;
        case "Q":
        case "Z":
          score += 10;
          break;
        default:
          score = 0;
          break;
      }
    });
    if (playedWord.length >= 7 && playedWord.length <= 10) {
      score += 8;
    }
    return score;
  },
  
  //wave 4
  highestScoreFrom(words){
    //hash that stores winning word and score
    //empty string = 0
    //fewest letters win
    //unless there are 10 letters; tie goes to 10 >
    //multiple wiining word === score && length; FIFO
  }

}

// Do not remove this line or your tests will break!
export default Adagrams;

