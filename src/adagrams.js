const Adagrams = {
  drawLetters() {
    const handSize = 10;
    const letterDist = { "A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3,
                         "H": 2, "I": 9, "J": 1, "K": 1, "L":  4, "M": 2, "N": 6,
                         "O": 8, "P": 2, "Q": 1, "R": 6, "S":  4, "T": 6, "U": 4,
                         "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1 };
    let letterPool = "";
    for (const [letter, value] of Object.entries(letterDist)) { // Object.entries({a: 1, b: 2}) ==> [ [ 'a', 1 ], [ 'b', 2 ] ]
      letterPool += letter.repeat(value);
    }
    let hand = [];
    for (let i = 0; i < handSize; i++) {
      let randIndex  = Math.floor(Math.random() * letterPool.length);
      let randLetter = letterPool.slice(randIndex, randIndex + 1);
      hand.push(randLetter);
    }
    return hand;
  },
  
  // Method to check if the word is an anagram of some or all of the given letters in the hand.
  usesAvailableLetters(input, lettersInHand) {
    let handCopy = Array.from(lettersInHand);
    for(let i = 0; i < input.length; i++) {
      let letter = input[i];
      if(handCopy.includes(letter)) {
        handCopy.splice(handCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },

  // Method that returns the score of a given word as defined by the Adagrams game
  scoreWord(word) {
    const letterValues = { "A": 1, "B": 3, "C":  3, "D": 2, "E":  1, "F": 4, "G": 2,
                           "H": 4, "I": 1, "J":  8, "K": 5, "L":  1, "M": 3, "N": 1,
                           "O": 1, "P": 3, "Q": 10, "R": 1, "S":  1, "T": 1, "U": 1,
                           "V": 4, "W": 4, "X":  8, "Y": 4, "Z": 10 };
    word = word.toUpperCase()
    let score = 0;
    for(let i = 0; i < word.length; i++) {
      score += letterValues[word[i]];
    }
    if (word.length >= 7 && word.length <= 10) score += 8;
    return score;
  },

// Method that looks at the array of words and calculates which of these words has the highest score
  highestScoreFrom(words) {
    let maximumScore = Math.max(...words.map(word => this.scoreWord(word))); // find the maximum score from all the words
    let highestWords = words.filter(word => this.scoreWord(word) === maximumScore); // find the words that has the maximum score

    if (highestWords.length === 1) {
      return {word: highestWords[0], score: maximumScore};
    }

    let minimumLength = Math.min(...highestWords.map(word => word.length == 10 ? 0 : word.length)); // 
    let shortestWords = highestWords.filter(word => (word.length == 10 ? 0 : word.length) === minimumLength); // find the words that has the minimum length
    return {word: shortestWords[0], score: maximumScore};
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
 








// # Function to get word with highest score and handles ties (solution A)
// def highest_score_from(words)
 
//   maximum_score = words.map { |word| score_word(word) }.max # turns array of words into array of word scores, then takes the max
//   highest       = words.select { |word| score_word(word) == maximum_score } # returns an array with words with maximum score
 
//   if highest.length == 1
//     winning_word = highest.first # no ties for winning, get the only word winner
//   else
// # finds length of the shortest word. Words with 10 letters are accounted as length 0, so they become the “shortest” of them all.
//     min_length = highest.map { |word| word.length == 10 ? 0 : word.length }.min

// # gets all words with the shortest length. There’s at least one, but there still could be ties.
//     shortest = highest.select { |word| min_length == (word.length == 10 ? 0 : word.length) }
// # if there’s only one “shortest” word, that’s the winning word
//     winning_word = shortest.first
//   end
 
//   results = {}
//   results[:word]  = winning_word
//   results[:score] = maximum_score
//   return results
 
// end

