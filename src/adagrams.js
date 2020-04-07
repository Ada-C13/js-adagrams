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
  
}
// console.log(Adagrams.usesAvailableLetters('cata', ['a', 'c', 't']));

// Do not remove this line or your tests will break!
// Adagrams.drawLetters();
export default Adagrams;
