const Adagrams = {
  alphabet: {
    A: 9, B: 2, C:2, D:4, E:12, F:2, 
    G:3, H:2, I:9, J:1, K:1, L:4, M:2, 
    N:6, O:8, P:2, Q:1, R:6, S:4, T:6, 
    U:4, V:2, W:2, X:1, Y:2, Z:1
  },

  drawLetters() {
    const lettersPool = this.alphabet;
    const tenLetters = [];
    let randomLetter = '';
    const letters = Object.keys(lettersPool);
    for (let i = 0; i < 10; i++) {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      if (lettersPool[randomLetter] > 0) {
        lettersPool[randomLetter] -= 1;
        tenLetters.push(randomLetter);
      } else if (lettersPool[randomLetter] === 0) {
        i -= 1;
      };
    };
    return tenLetters;
    }
};

// Do not remove this line or your tests will break!
export default Adagrams;
