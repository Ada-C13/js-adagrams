const Adagrams = {

  // Implement this method for wave 1
  letters_pool: {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  },

  drawLetters() {
    let hand = [];
     
    const letters_pool = this.letters_pool
    for (const letter in letters_pool) {
      for (let i = 0; i < letters_pool[letter]; i++) {
        hand.push(letter);
      }
    };   

    hand = this.shuffle(hand)
    hand.splice(10);

    return hand;
  },

  // Helper function for wave 1
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomIdx(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  // Helper funciton for wave 1
  // reference: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(array) {
    for(let i = 0; i < 10; i++) { // 10 times
      let j = this.randomIdx(array.length);
      [array[i], array[j]] = [array[j], array[i]]
    };
    return array;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
