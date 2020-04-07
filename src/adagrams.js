class Adagrams {
  
  static drawLetters() {
    // Implement this method for wave 1
    const letters = {
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
      Z: 1,
    }

    let chosen = {};
    let drawn = [];
    //ASCII for A-Z, using ASCII to draw letters to reduce time complexity for having loop inside loop
    const min = 65;
    const max = 90;
    const range = max - min + 1;
    let numOfWords = 0;
    
    while (numOfWords < 10) {
      let num = min + Math.floor(Math.random() * range);
      let letter = String.fromCharCode(num);
      if (chosen[letter]) {
        if (chosen[letter] < letters[letter]) {
        chosen[letter] += 1;
        drawn.push(letter);
        numOfWords += 1;
        }
      } else {
        chosen[letter] = 1;
        drawn.push(letter);
        numOfWords += 1;
      }
    }
      return drawn;
    }
  
  static usesAvailableLetters(input, lettersInhand) {
    let letterCount = {};
    lettersInhand.forEach((char) => { if (letterCount[char]){
      letterCount[char] += 1 ;
    } else {
      letterCount[char] = 1;
    } })

    const checkLetter = input.toUpperCase().split('');

    for( let i = 0; i < checkLetter.length ; i++ ) {
      if (letterCount[checkLetter[i]] >= 1 ) {
        letterCount[checkLetter[i]] -= 1;

      } else {
        return false;
      }
    };

    return true;
  }
    

  static scoreWord(word) {
    let score = 0;
    const wordArray = word.toUpperCase().split('');
    wordArray.forEach((charScore) => {
      switch (charScore) {
        case "Q":
        case "Z":
          score += 10;
          break;
        case "J":
        case "X":
          score += 8;
          break;
        case "K":
          score += 5;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          score += 4 ;
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          score += 3;
          break;
        case "D":
        case "G":
          score += 2
          break;
        default:
          score += 1;
      }
    });

    if(wordArray.length >= 7){
      score += 8;
    };
    return score;
  }

  static highestScoreFrom(words) {
    let highestScore = { word: "", score: 0 };
    words.forEach((word) => {
      let currScore = this.scoreWord(word);
      if (currScore > highestScore.score) {
        highestScore.score = currScore;
        highestScore.word = word;
      } else if (currScore === highestScore.score &&  highestScore.word.length !== 10) {
          if (( word.length < highestScore.word.length) ||( word.length === 10 && highestScore.word.length !== 10)) {
            highestScore.score = currScore;
            highestScore.word  = word;
          } ;
      };
    })
    return highestScore;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;

    /* 
    // working draw letters function - but time complexity is too high?
    let letterArray = [];    
    for(let key in this.letters){
      for(let time = 0 ; time < this.letters[key]; time++) {
        letterArray.push(key);
      }
    };
    
   let chosenLetter = [];
    
    for(let i = 0; i <= 9; i ++) {
      let num = Math.floor(Math.random() * Math.floor(25));
      chosenLetter.push(letterArray[num]);
    };
    return(chosenLetter); 
  }, 
  */