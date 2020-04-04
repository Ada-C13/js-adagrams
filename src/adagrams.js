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
      // console.log(i, randIndex, randLetter);
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

  

}

// Do not remove this line or your tests will break!
export default Adagrams;
 
/* # A method that looks at the array of words and calculates which of these words has the highest score.
def highest_score_from(words)
  maximum_score = words.map { |word| score_word(word) }.max
  highest = words.select { |word| score_word(word) == maximum_score }
  if highest.length == 1  
    winning_word = highest.first
  else
    highest_lengths = highest.map {|i| i.length}
    if highest_lengths.any? { |x| x == 10 }
      index_of_length_10 = highest_lengths.find_index(10)
      winning_word  = highest[index_of_length_10]
    else
      winning_word = highest[highest_lengths.find_index(highest_lengths.min)]
    end   
  end

  results = {:score => maximum_score, :word => winning_word}

  return results
end

def is_in_english_dict?(input)
  return $dictionary.include?(input)
end
*/