const Adagrams = {
  drawLetters() {
    const constLetterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];
    let playerHand = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 99);
      playerHand.push(constLetterPool[randomNum]);
    };

    return playerHand;
  },
  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    let checkAvail = {};

    for (const letter of lettersInHand) {
      if (checkAvail[letter] === undefined) {
        checkAvail[letter] = 1;
      } else {
        checkAvail[letter] += 1;
      }
    };

    for (const letter of inputArray) {
      if (checkAvail[letter] !== undefined) {
        checkAvail[letter] -= 1;
      } else {
        checkAvail[letter] = -1;
      }
    };

    for (const count of Object.values(checkAvail)) {
      if (count < 0) return false;
    };

    return true;
  },
  scoreWord (word) {
    
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;