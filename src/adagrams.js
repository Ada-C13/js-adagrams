
const Adagrams = {

  lettersPool : {
    A : 9, N : 6,
    B : 2, O : 8,
    C : 2, P : 2,
    D : 4, Q : 1,
    E : 12, R : 6,
    F : 2, S : 4,
    G : 3, T : 6,
    H : 2, U : 4,
    I : 9, V : 2,
    J : 1, W : 2,
    K : 1, X : 1,
    L : 4, Y : 2,
    M : 2, Z : 1,
  },

  // drawLetters(); returns an array with 10 letters from the pool. Depends of how many of them are within it. 
  drawLetters() {
    // Implement this method for wave 1
   const handLetters = [];
  
    for (let i = 0; handLetters.length < 10; i++) {
      let keys = Object.keys(this.lettersPool);
      // It selects a random key from the pool. 
      let letter = keys[ keys.length * Math.random() << 0];
      handLetters.push(letter);
      this.lettersPool[letter] -= 1;
      
      if (this.lettersPool[letter] == 0) {
        delete this.lettersPool[letter];
      }
    }
    return handLetters;
  },

  // Returns an object that has an element as a key and as a value the number of times that element appears.
  countLetters(objectToCount) {
    const object = {};

    for (const element of objectToCount) {

      if (object[element] !== undefined) {
        object[element] += 1
      } else {
        object[element] = 1
      }
    }
    return object;
  },

  // usesAvailableLetters checks input word only uses characters 
  // that are contained within a collection (lettersInHand array). 
  usesAvailableLetters(input, lettersInHand) {

    const lettersInHandCount = this.countLetters(lettersInHand);
    const inputUpCase = input.toUpperCase();
    const inputArray = inputUpCase.split('');

    for (const letter of inputArray) {
      //  If the letter does not exist and the occurrence of that letter is cero returns false.
      if (lettersInHandCount[letter] !== undefined && lettersInHandCount[letter] !== 0){
        lettersInHandCount[letter] -= 1;
      }
      else {
        return false;
      }
    }
    return true;
  },

  scoreChart : {
    A: 1, E: 1, 
    I: 1, O: 1,
    U: 1, L: 1,
    N: 1, R:1,
    S: 1, T: 1,
    D: 2, G:2,
    B: 3, C: 3,
    M: 3, P: 3,
    F: 4, H: 4, 
    V: 4, W:4, 
    Y: 4, K: 5,
    J: 8, X: 8,
    Q: 10, Z:10
  },

  // scoreWord returns the score of a given word base on the score chart (Object)
  scoreWord(word) {
    let score = 0;
    const wordLength = word.length;
    const wordUpCase = word.toUpperCase();
    // ()...) spread syntax to convert a string into an array.
    const wordArray = [...wordUpCase];
    
    for (const letter of wordArray) {
      // find the value within the scoreChar Object.
      if (this.scoreChart[letter] !== undefined) {
        score += this.scoreChart[letter];
      }
    }

    if (wordLength > 6) {
      score += 8;
    }

   return score;
  },

  // highestScoreFrom finds the highest scoring word. This function looks at the array of words and calculates which of these words has the highest score.
  highestScoreFrom(words) {
    const wordsObj = {};
    
    for (const word of words) {
      wordsObj[word] = this.scoreWord(word);
    }

    let valuesArray = Object.values(wordsObj);

    // The spread syntax expands the values array elements and inputs each element
    // in the array individually into the Math.max() method.
    const highestScore = Math.max(...valuesArray);

    // To store the word with the same highest score.
    const winnerWords = {};
    
    Object.keys(wordsObj).forEach(function (item) {
      if (wordsObj[item] === highestScore){
        winnerWords[item] = wordsObj[item]
      }
    });

    // set up the length up to 15 to have an inicial value greater than a possible word lenght.
    let minLength = 15;
    const winner = {};
    // It returns the length of the shortest word. 
    for (let [key] of Object.entries(winnerWords)) {
      if (key.length < minLength) {
        minLength = key.length
      }
    }
    // It retuns the winner if the word length is 10. 
    for (let [key,value] of Object.entries(winnerWords)) {
      if (key.length == 10) {
        winner['word'] = key,
        winner['score'] = value
        return winner;
      }
    }
    // It return the shortest word with the higthest score.
    for (let [key,value] of Object.entries(winnerWords)) {
      if (key.length == minLength) {
        winner['word'] = key,
        winner['score'] = value
        return winner;
      }
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
