
class Adagrams  {
  
  static drawLetters() {
    const compactBag = {A: 9, B: 2, C: 2,D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };
  
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
  }
  //wave2 
  //function uses ava. letters, takes a string & array of letters.
  // to determine if the string can be made from the array of letters
      //return true if the string is valid(can be made from array of letters)
      // false if the string is invalid (can't be made from array of letters)

      static usesAvailableLetters(input, lettersInHand) {
        // if (input.length > 10 || input.length < 1 || lettersInHand.length !== 10){
        //   return false;
        // } // wrote code to handle edge case, was told not to do that, so I commented it out, but keep it for referance. 
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
  
   // wave 3
  //function that return scoreWord that takes in strings of charcters.
  //returns an integer resprsending the number of points. 
  static scoreWord(word){
    let score = 0;
    const scoreChartOfLetter = {A: 1, N: 1, B: 3, O: 1, C: 3, P: 3, D: 2, Q: 10, E: 1, R: 1, F: 4, S: 1,G: 2, T: 1, H: 4, U: 1, I: 1, V: 4, J: 8, W: 4, K: 5, X: 8, L: 1, Y: 4, M: 3, Z: 10};
  word.toUpperCase().split('').forEach(char => {
    score += scoreChartOfLetter[char] 
});
if (word.length >= 7){
  score += 8;
  console.log(score)
}
return score
}

// wave 4
// create a function highestScoreFrom & the function has one parameter(word) which is array of strings
// returns object w/winner word & it's score
// if score tied, using tie-breaking (choose word w/fewest letter unless word has 10 letters)
// if many words have the same score, choose the 1st one you see
static highestScoreFrom(words) {
  let winner = {
    word: '',
    score: 0
  };
  for (let word of words){
    if(this.scoreWord(word) > winner.score){
      winner = {word: word, score: this.scoreWord(word) };
    }
    else if(this.scoreWord(word) == winner.score){
      if(((word.length < winner.word.length) || (word.length == 10)) && (winner.word.length !== 10)){
          winner = {word: word, score: this.scoreWord(word)};
        }
      }
      }  
      // console.log(Adagrams.highestScoreFrom('hannah', 'cat', 'dog'))
  return winner;

}

}
// console.log(Adagrams.scoreWord('cat'))
// console.log(Adagrams.usesAvailableLetters('cata', ['a', 'c', 't']));

// Do not remove this line or your tests will break!
// Adagrams.drawLetters();
export default Adagrams;