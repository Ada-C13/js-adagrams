
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
    const wordArray = wordUpCase.split('');
    
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

};

// const a = Adagrams.drawLetters();
// console.log(a);
// console.log(Adagrams.usesAvailableLetters("dog",['D', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']));
// console.log(Adagrams.scoreWord('DOGDOGDOG'));

// Do not remove this line or your tests will break!
export default Adagrams;
