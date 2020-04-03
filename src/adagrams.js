const Adagrams = {
 // wave 1
  drawLetters() {
    const sample = new Map([['A', 9], ['B', 2], ['C', 2], ['D', 4], ['E', 12], ['F', 2], ['G', 3], ['H', 2], ['I', 9], ['J', 1], ['K', 1], ['L',4], ['M', 2], ['N', 6], ['O', 8], ['P', 2], ['Q', 1], ['R', 6], ['S', 4], ['T', 6], ['U', 4], ['V', 2], ['W', 2], ['X', 1], ['Y', 2], ['Z', 1]])
    const poolLetters = []
    for (let [letter, quantity] of sample) {
      for (let i = 0; i < quantity; i++) {
          poolLetters.push(letter)
      } 
    }
    //randomize the pool of letters
    const theHand = []
    for (let i = 0; i < 10; i++) {
      let index = Math.random() * poolLetters.length; //'ll give us numbers from 0- length
      let letter = poolLetters[index]; 
      theHand.push(letter)
    }
    return theHand
  }

  },
      
    
// Do not remove this line or your tests will break!
export default Adagrams;
