const Adagrams = {
  
  drawLetters() {
    const compactBag = {
          A: 9,
          B: 2, 
          C: 2, 
          D: 4, 
          E: 12, 
          F: 2, 
          G: 3, 
          H: 2, 
          I: 9,
          J: 1, 
          K: 1, 
          L: 4,
          M: 2,
          N: 6,
          O: 8,
          P: 2, 
          Q: 1, 
          R: 6,
          S: 4, 
          T: 6,
          U: 4,
          V: 2,
          W: 2,
          X: 1, 
          Y: 2, 
          Z: 1
        };
      
    console.log('Welcome to Adagrams!');
   
    let expandedBag = []
    // expand letters bag
    for (let [key, value] of Object.entries(compactBag)) {
      for (let i = 0; i < value; i++) {
        expandedBag.push(key);
      }
    }

    let hand = [];
    while (hand.length < 10) {
       // grab random number for index
      const randIndex = Math.floor(Math.random() * (expandedBag.length))
      // get a letter from expanded letters array
      const letter = expandedBag[randIndex]
      // push letter into hand 
      hand.push(letter);
      // remove letter from expanded array
      expandedBag.splice(randIndex, 1)
    }

    return hand;

    // Implement this method for wave 1
  },
  //wave2 
  //function uses ava. letters, takes a string & array of letters.
  // to determine if the string can be made from the array of letters
      //return true if the string is valid(can be made from array of letters)
      // false if the string is invalid (can't be made from array of letters)

      usesAvailableLetters(input, lettersInHand) {
        // if (input.length > 10 || input.length < 1 || lettersInHand.length !== 10){
        //   return false;
        // }
        const inputLetters = input.split('')
        let result = true
        inputLetters.forEach(letter => {
          // find indexOfLetter in lettersInHand array. //from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
          let indexOfLetter = lettersInHand.indexOf(letter)
          // console.log(letter);
          // console.log(indexOfLetter)
          // indexOf returns -1 if letter is not found
          if (indexOfLetter === -1 ){
           
            result = false
            // return false
          } else {
            //slice makes if letter is found, delete a letter from lettersInHand
            lettersInHand.splice(indexOfLetter, 1)
          }
        })
        return result;
      }
}
// console.log(Adagrams.usesAvailableLetters('cata', ['a', 'c', 't']));

// Do not remove this line or your tests will break!
// Adagrams.drawLetters();
export default Adagrams;
