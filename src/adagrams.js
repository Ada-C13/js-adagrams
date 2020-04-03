const Adagrams = {
  pool: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
        'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 
        'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
        'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I',
        'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L',
        'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N',
        'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P',
        'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S',
        'S', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S',
        'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U',
        'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'
  ],

  shufflePool() {
    let poolCopy = this.pool.slice(0, this.pool.length);
    let newPosition = null;
    let temp = null;

    for (let i = poolCopy.length - 1; i > 0; i--) {
      newPosition = Math.floor(Math.random() * (i + 1));

      temp = poolCopy[i];
      poolCopy[i] = poolCopy[newPosition];
      poolCopy[newPosition] = temp;
    }

    return poolCopy;
  },

  drawLetters() {
    // Implement this method for wave 1
    let shuffledPool = Adagrams.shufflePool();

    let drawn = shuffledPool.slice(0, 10);

    return drawn;
  },

  usesAvailableLetters(input, lettersInHand) { 
    let lettersCount = {};

    lettersInHand.forEach((letter) => {
      if (!lettersCount[letter]) {
        lettersCount[letter] = 1; 
      } else {
        lettersCount[letter] += 1;
      }
    });

    // console.log(lettersCount);

    // console.log(input.toUpperCase().split(''));

    let wordArray = input.toUpperCase().split('');

    for(let i = 0; i < wordArray.length; i++) {
      const letter = wordArray[i];
      if(lettersCount[letter] === undefined || lettersCount[letter] === 0) {
        return false;
      } else {
        lettersCount[letter] -= 1;
      }
    };

    // console.log(lettersCount);

    return true;
  },

};

// console.log(Adagrams.shufflePool());
// console.log(Adagrams.pool);
// let drawn = Adagrams.drawLetters();
// let drawn = ['K', 'A', 'T', 'T', 'E'];
// console.log(drawn);
// console.log(Adagrams.usesAvailableLetters('katt', drawn));

// Do not remove this line or your tests will break!
export default Adagrams;
