const Adagrams = {
  alphabet: {
    A: 9, B: 2, C:2, D:4, E:12, F:2, 
    G:3, H:2, I:9, J:1, K:1, L:4, M:2, 
    N:6, O:8, P:2, Q:1, R:6, S:4, T:6, 
    U:4, V:2, W:2, X:1, Y:2, Z:1
  },

  drawLetters() {
    const lettersPool = this.alphabet;
    const tenLetters = [];
    let randomLetter = '';
    const letters = Object.keys(lettersPool);
    for (let i = 0; i < 10; i++) {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      if (lettersPool[randomLetter] > 0) {
        lettersPool[randomLetter] -= 1;
        tenLetters.push(randomLetter);
      } else if (lettersPool[randomLetter] === 0) {
        i -= 1;
      };
    };
    return tenLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    // Create an object out of available letters
    const availableLetters = {};
    for (let letter of lettersInHand) {
      if (availableLetters[letter]) {
        availableLetters[letter] += 1;
      } else {
        availableLetters[letter] = 1;
      };
    };

    // Check if input word consists of available letters
    for (let char of input) {
      if (availableLetters[char] > 0) {
        availableLetters[char] -= 1;
      } else {
        return false;
      };
    };
    return true;
  },


  scoreWord(word) {
    const lettersScores = {
      A:1, B:3, C:3, D:2, E:1, F:4, 
      G:2, H:4, I:1, J:8, K:5, L:1, M:3, 
      N:1, O:1, P:3, Q:10, R:1, S:1, 
      T:1, U:1, V:4, W:4, X:8, Y:4, Z:10};

    let score = 0;
    let string = word.toUpperCase()
    for (let character of string) {
      score += lettersScores[character];
    };
    if (string.length >= 7) {
      score += 8;
    }
    return score;
  },

  highestScoreFrom(words) {
    const allWords = {};
    const winnerWord = {};
    let highestScore = 0;

    // Get all words with their scores
    words.map(word => {
      allWords[word] = this.scoreWord(word)
    });
    console.log(allWords)

    for (let [word, score] of Object.entries(allWords)) {
      if (word.length === 10) {
        // selects the word with 10 letters
        winnerWord['word'] = word;
        winnerWord['score'] = score;
        break;
        // selects the word with highest score
      } else if (score > highestScore) {
        highestScore = score;
        winnerWord['word'] = word;
        winnerWord['score'] = score;   
        // selects the word with fewer letters when neither are 10 letters    
      } else if (word.length < winnerWord.word.length && score === highestScore) {
        winnerWord['word'] = word;
        winnerWord['score'] = score; 
        // selects the first word when both have same length      
      } else if (word.length === winnerWord.word.length && score === highestScore) {
        winnerWord['word'] = winnerWord.word;
        winnerWord['score'] = winnerWord.score;       
      };
    };
    return winnerWord
  }
};



// Do not remove this line or your tests will break!
export default Adagrams;
