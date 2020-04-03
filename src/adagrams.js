const letterQuantities = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2, 
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};

const Adagrams = {
  drawLetters() {
    const poolLetters = [];

    for (let [letter,quant] of Object.entries(letterQuantities)) {
      for (let i = 0; i < quant; i++) {
        poolLetters.push(letter);
      };
    };

    let indexArray = Array.from(poolLetters.keys());
    const sampleIndex = []
    let size = 10;

    for (let i = 1; i <= size; i++) {
      const randomIndex = Math.floor(Math.random() * (indexArray.length - i));
      sampleIndex.push(indexArray[randomIndex]);
      indexArray[randomIndex] = indexArray[indexArray.length - i];
    };

    const lettersInHand = [];
    sampleIndex.forEach(index => lettersInHand.push(poolLetters[index]));
    return lettersInHand;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
