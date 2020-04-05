// > Object.entries({a: 1, b: 2})
// [ [ 'a', 1 ], [ 'b', 2 ] ]
// > Object.keys({a: 1, b: 2})
// [ 'a', 'b' ]
// > Object.values({a: 1, b: 2})
// [ 1, 2 ]


const Adagrams = {
  // this is a function inside of an object
  // it's the same as writing ==> drawLetters: function() {...}
  drawLetters() {
    let letters = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'f', 'f', 'g', 'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'j', 'k', 'l', 'l', 'l', 'l', 'm', 'm', 'n', 'n', 'n','n', 'n', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'p', 'p', 'q', 'r', 'r', 'r', 'r', 'r', 'r', 's', 's', 's', 's', 't', 't', 't', 't', 't', 't', 'u', 'u', 'u', 'u', 'v', 'v', 'w', 'w', 'x', 'y', 'y', 'z'];

    const lettersInHand = [];
    // Method discovered on Stack Overflow here: https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    // Here is what I think it's doing:  Math.random returns a floating point between 0-1, multiplies that by the length of the array, and Math.floor rounds that down to determine a 'random' index - is it really random?  According to some people, no.  But we'll take it for our first go at a randomizer. 
    for(let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random()*letters.length);
      let letter = letters[randomIndex];
      
      letters.splice(randomIndex, 1);

      lettersInHand.push(letter.toUpperCase());
    };

    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = lettersInHand.map((letter) => letter);
  
    const splitInput = input.split('');
        
    for (let i = 0; i < splitInput.length; i++) {
      if (lettersInHandCopy.includes(splitInput[i])) {
        const index = lettersInHandCopy.indexOf(splitInput[i]);
        lettersInHandCopy.splice(index, 1);
      } else {
        return false;
      };
  
    };
    return true;
  },

  scoreWord(word) {
    let score = 0;
  
    if (word.length > 6) {
      score += 8;
    };
  
    const wordArray = word.toUpperCase().split('');
  
    for (const char of wordArray) {
      switch(char) {
        case 'A':
        case 'E': 
        case 'I': 
        case 'O': 
        case 'U': 
        case 'L': 
        case 'N': 
        case 'R': 
        case 'S':
        case 'T':
          score += 1;
          break;
        case 'D':
        case 'G':
          score += 2;
          break;
        case 'B':
        case 'C': 
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F': 
        case 'H': 
        case 'V': 
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'K':
          score += 5;
          break;
        case 'J': 
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
      }
    };
    return score;
  },

  wordScores(words) {
    const wordsAndScores = {};
    
     words.forEach(word => {
      wordsAndScores[word] = this.scoreWord(word);
    });

    return wordsAndScores;
  },

  tieBreaker(words) {
    const tenLetterWords = [];
    const tieScoreWords = [];
    let winner = null;

    const scores = this.wordScores(words);
    const entries = Object.entries(scores);

    for (let [word, score] of entries) {
      if (word.length === 10) {
        tenLetterWords.push(word);
      } else {
        tieScoreWords.push(word);
      };

      if (tenLetterWords.length > 0) {
        winner = tenLetterWords[0];
      } else {
        winner = tieScoreWords.reduce((a,b) => a.length <= b.length ? a : b);
      };
    };
    return winner;
  },

  highestScoreFrom(words) {
    let highestScore = {};

    const scores = this.wordScores(words);
    
    const winningWord = this.getMax(scores);

    if (winningWord.length > 1) {
      let winner = this.tieBreaker(winningWord);
      let scored = this.scoreWord(winner);
      highestScore['score'] = scored;
      highestScore['word'] = winner;
    } else {
      let winner = winningWord[0];
      let scored = this.scoreWord(winner);
      highestScore['score'] = scored;
      highestScore['word'] = winner;
    };

    return highestScore;
  },
  
  getMax(wordScores) {
    return Object.keys(wordScores).filter(x => {
      return wordScores[x] == Math.max.apply(null, 
        Object.values(wordScores));
    });
  }, 

}

// Do not remove this line or your tests will break!
export default Adagrams;