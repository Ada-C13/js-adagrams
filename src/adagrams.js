const Adagrams = {
  drawLetters() {
    // Object keys are typeof "string" by default
    const letterChoices = {A: 9, B: 2, C: 2, D:4, E: 12, F: 2,
                            G: 3, H: 2, I: 9, J: 1, K: 1, L: 4,
                            M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
                            S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
                            Y: 2, Z: 1
                          };

    let letterPool = "";
    for (const [letter, points] of Object.entries(letterChoices)) {
      // .repeat => built in function for the String class
      // builds a string according to key/value pairs ie: "AAAAAAAAABBCCDDDD"
      letterPool += letter.repeat(points);
    }

    const hand = [];
    // convert String into Array
    const letterPoolArray = letterPool.split("");
    // build a hand of 10 random letters
    for (let i = 0; i < 10; i++) {
      // this line is shuffling the tiles
      let randomIndex = Math.floor(Math.random() * letterPoolArray.length);
      // this line is choosing one letter
      let randomLetter = letterPoolArray[randomIndex];
      // pushing each letter into hand
      hand.push(randomLetter);
      // removing the chosen letter
      letterPoolArray.splice(randomIndex, 1);
    
    }
    return hand;
  },
  
    // Wave 2
    // input => some input word - a String. 
    // letersInHand is an array of 10 String characters.
  usesAvailableLetters(input, lettersInHand) {
    // .map copies array for shallow clone 
    // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    const copyOfHand = lettersInHand.map((x) => x);
    // .split is an ordered set of substrings
    const inputLetters = input.toUpperCase().split('');
    // check if input is a valid word made from the hand of 10
    for(let i = 0; i < inputLetters.length; i++) {
      if(copyOfHand.includes(inputLetters[i])) {
        // if the letter is in the hand, remove it.
        copyOfHand.splice(copyOfHand.indexOf(inputLetters[i]), 1);
      } else {
        return false;
      }
    };
      return true;
  },

  // Wave 3
  // return score of given word  based on point system and additional scoring rules. 
  scoreWord(word) {
    let scoreCount = 0;
    // create array
    const splitWord = word.toUpperCase().split('');
    // validate input
    if (word === "") {
      return scoreCount;
    };

    for(let i = 0; i < splitWord.length; i++) {
      // expression is an Array
      const expression = splitWord[i];
      // expression is a String
      switch (expression) {
        // specific letters and their values - multiple cases on one line.
        // https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript
        case "A": case "E": case "I": case "O": case "U": case "L": case "N": case "R": case "S": case "T":
          scoreCount += 1;
          break;
        case "D": case "G":
          scoreCount += 2;
          break;
        case "B": case "C": case "M": case "P":
          scoreCount += 3;
          break;
        case "F": case "H": case "V": case "W": case "Y":
          scoreCount += 4;
          break;
        case "K":
          scoreCount += 5;
          break;
        case "J": case "X":
          scoreCount += 8;
          break;
        case "Q": case "Z":
          scoreCount += 10;
          break;
      };

    }; 
    if (splitWord.length >= 7) {
      scoreCount += 8;
    };
    
    return scoreCount;

  },


   highestScoreFrom(words) {
    //  map returns an array of objects
    // .map is my favorite! :)
     const wordScores = words.map((word) => {
      const newWord = {
        'word': word,
        'score': this.scoreWord(word)
      };
      return newWord;
    });
        
    // set winningWord to the first object in array as a starting point
     let winningWord = wordScores[0];

     for (let i in wordScores) {
       // using dot notation to access the object's properties/values
      //  check to see if word score is greater and
      // if so, then assign this new word to winningWord.
       if (wordScores[i].score > winningWord.score) {
         winningWord.word = wordScores[i].word;
         winningWord.score = wordScores[i].score;
       } else if
      //  check if two words have same score but one has length 10.
         (wordScores[i].score === winningWord.score &&
         wordScores[i].word.length === 10) {
         winningWord.word = wordScores[i].word;
         return winningWord;
       } else if
      //  check if two words have same score - choose the word with less letters.
         (wordScores[i].score === winningWord.score &&
         wordScores[i].word.length < winningWord.word.length) {
         winningWord.word = wordScores[i].word;
         return winningWord;
       }
     }
     return winningWord;
   }
 
};
// Do not remove this line or your tests will break!
export default Adagrams;

