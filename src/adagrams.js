
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

      if (lettersInHandCount[letter] !== undefined && lettersInHandCount[letter] !== 0){
        lettersInHandCount[letter] -= 1;
      } else {
        return false;
      }
    }
    return true;
    // const inputCount = this.countLetters(input)
  },

};

// const a = Adagrams.drawLetters();
// console.log(a);
// console.log(Adagrams.usesAvailableLetters("dog",['D', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']));


// Do not remove this line or your tests will break!
export default Adagrams;
