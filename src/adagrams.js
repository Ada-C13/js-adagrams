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
    const letters = new Array();
    for (let char in allLetters) {
      for(let i = 0; i < allLetters[char]; i += 1) {
        letters.push(char);
      }
    }

    let hands = new Array();
    for(let i = 0; i < 10; i += 1) {
      const index = Math.floor(Math.random() * (letters.length));
      hands.push(letters[index]);
      letters.splice(index, 1);
    }
    return hands;
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
    return score
  },
  
  //wave 4
  highestScoreFrom(words) {
    let highScore = 0;
    let winningWord = "";

    for (let word of words) {
      if (this.scoreWord(word) > highScore) {
        highScore = this.scoreWord(word);
        winningWord = word; 
      }

      if (highScore == this.scoreWord(word)) {
        if ((word.length == 10 && winningWord.length != 10 ) || (word.length < winningWord.length && winningWord.length != 10)) {
          winningWord = word;
        } 
      }
    }

    let winningHand = {
      word: winningWord, 
      score: highScore
    };
    return winningHand
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

