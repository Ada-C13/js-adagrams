const Adagrams = {
  drawLetters() {
    // Declare letter distribution pool in an array
    const pool = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
      I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1,
      R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };

    // Create array for all possible letters
    const fullDeck = []

    for (let obj in pool) {
      for (let i = 0; i < pool[obj]; i++) {
        fullDeck.push(obj);
      }
    }

    // Populate player's hand 
    const lettersInHand = [];

    // Create Sattolo Cycle implementation for shuffle
    function sattoloShuffle(fullDeck) {
      for (let f = fullDeck.length - 1; f >= 0; f--) {
      const b = Math.floor(Math.random() * f)
      const temp = fullDeck[f];
      fullDeck[f] = fullDeck[b];
      fullDeck[b] = temp;
    }
    return fullDeck;
  };

  const dealerShuffle = sattoloShuffle(fullDeck);

  for (let c = 0; c < 10; c++) {
    lettersInHand.push(dealerShuffle[c]);
  }
  return lettersInHand
  },

  // Start of Wave 2 Psuedocode

  usesAvailableLetters(input, lettersInHand) {

    //Create a copy of lettersInHand
    const tempHand = [...lettersInHand];

    //Create an array of characters from input
    const inputArray = Array.from(input);

    if (input.length > 10 || input.length < 1) {
      return false;
    }

    //Iterate through inputArray to check if [i] is in hand
    for (const letter of inputArray) {
      if (!tempHand.includes(letter)) {
        return false;
      } else {
        const index = tempHand.indexOf(letter);
        if (index > -1) {
          tempHand.splice(index, 1);
        }
      }
    }
    return true;
  },

  //Start of Wave 3 pseudocode 

  scoreWord(word) {
    //Create scoring chart 
    const points = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };

    //Set scoring counter
    let score = 0 

    word = word.toUpperCase();
    
    //Handle extra points for certain word lengths
    if (word.length > 6 && word.length < 11) {
      score += 8;
    }

    // Create array of characters from word 
    const wordArray = Array.from(word);

    //Iterate through wordArray to sum points of a given word
    for (const item of wordArray) {
      if(points[item] === undefined) {
        return 0;
    } else {
        score += points[item];
      }
    }
    return score
  },

  //Start of Wave 4 pseudocode
  highestScoreFrom(words) {
    // Set variable for highest-scoring word 
    let highestScore = {word: '', score: 0}

    // Iterate through players to find the highest scored word and solve for ties + special instructions
    // TODO: Come back to finish this.
    for (const w of words) {
      const score = Adagrams.scoreWord(w);
      if (score > highestScore.score) {
      highestScore = {word: w, score: score};
      } else if (score === highestScore) {
      }
    }
    return highestScore;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;