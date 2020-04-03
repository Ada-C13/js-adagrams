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
    letterArray = letterArray.slice(0, 10);
    return letterArray;
  },
  
  // Check if input word to only use random letter drawn
  usesAvailableLetters(input, drawnLetters) {
    const word = input.toUpperCase().split('');
    const hand = drawnLetters;

    console.log(hand);
    console.log(word);

    for (let letter in word) {
      const index = hand.indexOf(word[letter]);
      if (index < 0) {
        return false;
      } else {
        delete hand[index];
      }
      console.log(hand);
    }
    return true;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
