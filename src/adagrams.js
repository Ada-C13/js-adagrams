// Class Adagrams
class Adagrams {
  // Method to create a hand of 10 letters according to a specific distribution
  static drawLetters() {
    const handSize = 10;
    const letterDist = { "A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3,
                         "H": 2, "I": 9, "J": 1, "K": 1, "L":  4, "M": 2, "N": 6,
                         "O": 8, "P": 2, "Q": 1, "R": 6, "S":  4, "T": 6, "U": 4,
                         "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1 };
    
    // Create a string with all the letters according to the distribution
    let letterPool = "";
    for (const [letter, value] of Object.entries(letterDist)) { 
      letterPool += letter.repeat(value);
    }

    // Create a hand by drawing random letters from the letter pool
    let hand = [];
    for (let i = 0; i < handSize; i++) {
      let randIndex  = Math.floor(Math.random() * letterPool.length);
      let randLetter = letterPool.slice(randIndex, randIndex + 1);
      hand.push(randLetter);
    }
    return hand;
  }
  
  // Method to check if the word is an anagram of some or all of the given letters in the hand
  static usesAvailableLetters(input, lettersInHand) {
    // Make a copy of the hand so we don't mess with the original one
    let handCopy = Array.from(lettersInHand);
    // Loop thru the word to make sure every letter is in the hand
    for(let i = 0; i < input.length; i++) {
      let letter = input[i];
      // Check if the letter is in the hand
      if(handCopy.includes(letter)) {
        // if the letter is in the hand, remove from the hand
        handCopy.splice(handCopy.indexOf(letter), 1);
      } else {
        // if the letter is not in the hand, the input is invalid
        return false;
      }
    }
    return true;
  }

  // Method that returns the score of a given word as defined by the Adagrams game
  static scoreWord(word) {
    const letterValues = { "A": 1, "B": 3, "C":  3, "D": 2, "E":  1, "F": 4, "G": 2,
                           "H": 4, "I": 1, "J":  8, "K": 5, "L":  1, "M": 3, "N": 1,
                           "O": 1, "P": 3, "Q": 10, "R": 1, "S":  1, "T": 1, "U": 1,
                           "V": 4, "W": 4, "X":  8, "Y": 4, "Z": 10 };
    word = word.toUpperCase()
    // Loop thru the word and add the value for each letter
    let score = 0;
    for(let i = 0; i < word.length; i++) {
      score += letterValues[word[i]];
    }
    if (word.length >= 7 && word.length <= 10) score += 8;
    return score;
  }

// Method that looks at the array of words and calculates which of these words has the highest score
  static highestScoreFrom(words) {
    // Find the maximum score from all the words
    let maximumScore = Math.max(...words.map(word => this.scoreWord(word)));
    // Find the words that have the maximum score
    let highestWords = words.filter(word => this.scoreWord(word) === maximumScore);
    // If there is only one word with the maximum score, return it
    if (highestWords.length === 1) {
      return {word: highestWords[0], score: maximumScore};
    }

    // Find the minimum length from all the words with the maximum score
    let minimumLength = Math.min(...highestWords.map(word => word.length == 10 ? 0 : word.length));
    // Find the words that have the minimum length
    let shortestWords = highestWords.filter(word => (word.length == 10 ? 0 : word.length) === minimumLength);
    return {word: shortestWords[0], score: maximumScore};
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
 