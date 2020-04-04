const Adagrams = {
  drawLetters() {
    let letterPool = [];
    const letterChoices = {A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};
    for (const letter in letterChoices) {
      
      if(letterChoices != undefined){
        const charCount = letterChoices[letter];
        const repeatSplit = letter.repeat(charCount).split('');
        letterPool = letterPool.concat(repeatSplit);
      };
      
    };

    const userHand = [];

    for (let i = 0; i < 10; i++) {
      const sample = letterPool[Math.floor(Math.random() * letterPool.length)];
      userHand.push(sample);
    };
    return userHand;
  },

  usesAvailableLetters(input, lettersInHand){
    const splitWord = input.split('');
    const lettersHash = {};

    lettersInHand.forEach(letter => lettersHash[letter]? lettersHash[letter] = lettersHash[letter] += 1 : lettersHash[letter] = 1);
    
    let containLetter = true;
    splitWord.forEach((char) => {
      if(lettersHash[char]) {
        lettersHash[char] -= 1;
      }else {
        containLetter = false;
      };
    });

    if(containLetter === true) {
      const letterCount = Object.values(lettersHash);
    return letterCount.min < 0? false : true;
    }else{
      return false;
    };
    
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
