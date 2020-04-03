const Adagrams = {
  letters: {
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
    Z: 1,
  },

  drawLetters() {
    // Implement this method for wave 1
    let chosen = {};
    let drawn = [];
    //ASCII for A-Z
    let min = 65;
    let max = 90;
    let range = max - min + 1;
    let numOfWords = 0;
    
    while (numOfWords < 10) {
      let num = min + Math.floor(Math.random() * range);
      let letter = String.fromCharCode(num);
      if ( chosen[letter] >= 1 ) {
        if (chosen[letter] < this.letters[letter]){
        chosen[letter] += 1;
        drawn.push(letter);
        numOfWords += 1;
        }
      } else {
        chosen[letter] = 1;
        drawn.push(letter);
        numOfWords += 1;
      }
    }
      return(drawn);
    }
    /* 
    // working draw letters function - but time complexity is too high?
    let letterArray = [];    
    for(let key in this.letters){
      for(let time = 0 ; time < this.letters[key]; time++) {
        letterArray.push(key);
      }
    };
    
   let chosenLetter = [];
    
    for(let i = 0; i <= 9; i ++) {
      let num = Math.floor(Math.random() * Math.floor(25));
      chosenLetter.push(letterArray[num]);
    };
    return(chosenLetter); 
  }, 
  */

}



console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
//export default Adagrams;
