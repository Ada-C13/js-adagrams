const Adagrams = {
  drawLetters() {
    // Amount of letters available for the game
    const allLetters = {
      A: 9, B: 2, C: 2, D: 4, E: 12,
      F: 2, G: 3, H: 2, I: 9, J: 1,
      K: 1, L: 4, M: 2, N: 6, O: 8,
      P: 2, Q: 1, R: 6, S: 4, T: 6,
      U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    }

    // Array to store the letters from the hash table
    let letterArray = []
    for (let letter in allLetters) {
      for (let char = 0; char < allLetters[letter]; char++) {
        letterArray.push(letter);
      }
    }
    
    // Get 10 random single-string letters
    letterArray.sort(() => Math.random() - Math.random());
    return letterArray.slice(0, 10);
  },

  // Check if input word to only use random letter drawn
  usesAvailableLetters(input, drawnLetters) {
    const word = input.toUpperCase().split('');
    const hand = drawnLetters;

    for (let letter in word) {
      const index = hand.indexOf(word[letter]);
      if (index < 0) {
        return false;
      } else {
        delete hand[index];
      }
    }
    return true;
  },
  
  // Points per letter
  letterScore: {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5, J: 8, X: 8, Q: 10, Z: 10
  },

  // Calculate score per word
  scoreWord(word) {
    let wordScore = 0
    word.toUpperCase().split('').forEach(letter => {
      wordScore  += this.letterScore[letter]
    });

    // Award extra points if condition is met
    if (word.length > 6) {
      wordScore  += 8
    }
    return wordScore 
  },

  // Find the highest scoring word
  highestScoreFrom(words) {
    let bestWord = { word: '', score: 0 }
    
    words.forEach(word => {
      const score = this.scoreWord(word)
      
      if (score > bestWord['score']) {
        bestWord['word'] = word
        bestWord['score'] = score
      }
      else if (score === bestWord['score']) {
        const wordLength = word.length
        const longestWord = bestWord['word'].length
        if ((wordLength < longestWord || wordLength === 10) && longestWord < 10) {
          bestWord['word'] = word
          bestWord['score'] = score
        }
      }
    });
    return bestWord
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
