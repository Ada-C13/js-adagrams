const Adagrams = {

  drawLetters() {
    const letterCounts = {
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
    }
    
    let letterPool = [];
  
    for (const letter in letterCounts) {
      for (let x = 1; x < letterCounts[letter]; x++) {
        letterPool.push(letter);
      }
    }
  
    let lettersInHand = [];
    
    for (let x = 0; x < 10; x++) {
      let rand = Math.floor(Math.random() * letterPool.length);
      lettersInHand.push(letterPool[rand]);
      letterPool.splice(rand, 1);
    };
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    let charsArray = input.split('');
    let letterHash = {};
    
    lettersInHand.forEach((letter) => letterHash[letter]?
    letterHash[letter] = letterHash[letter]++ : letterHash[letter] = 1);

    for (let i = 0; i < input.length; i++) {
      const char = charsArray[i];
      if (letterHash[char]) {
        letterHash[char] -=1;
      } else {
        return false;
      };
    };

    Object.keys(letterHash).forEach((key) => {
      if (letterHash[key] !== 0) {
        return false;
      };
    });

    // for in or 

    return true;
  },

  scoreWord(word) {
    const letterScores = {
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
    
    let score = 0;
    if (word.length >= 7 && word.length <= 10) {
      score = 8;
    }

    let wordChars = word.toUpperCase().split('');

    wordChars.forEach((letter) => {
      score += letterScores[letter];
    });

    return score;

  },

  highestScoreFrom (words) {
    let wordHash = {}; // make an empty hash

    let highScore = 0; // create highScore
    let highScoreWord = ''; // create highScoreWord
  
    let i = 0;
    while(i < words.length) { // loop through words by each word
      let word = words[i]
      let wordScore = Adagrams.scoreWord(word); // wordScore = scoreWord(word)
      if (wordScore > highScore) { // if the score is larger than the highScore then...
        highScore = wordScore; // highScore = wordScore
        highScoreWord =  word; // highScoreWord = word
      } else if (wordScore === highScore) { // else if wordScore === highScore
          if (highScoreWord.length !== 10) { // if highScoreWord.length !== 10
            if (word.length === 10) { // if word.length === 10
              highScoreWord = word // highScoreWord = word
            } else if (word.length < highScoreWord.length) { // else if word.length < highScoreWord.length
              highScoreWord = word // highScoreWord = word
            };
          };
      };
  
      i++;
    }; 
    wordHash = {
      word: highScoreWord, 
      score: highScore
    }; // wordHash = {word: highScoreWord, score: highScore}
  
    return wordHash; //return wordHash
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
