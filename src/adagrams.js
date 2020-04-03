// const letterQuantities = {
//   'A': 9,
//   'B': 2,
//   'C': 2,
//   'D': 4,
//   'E': 12,
//   'F': 2,
//   'G': 3,
//   'H': 2, 
//   'I': 9,
//   'J': 1,
//   'K': 1,
//   'L': 4,
//   'M': 2,
//   'N': 6,
//   'O': 8,
//   'P': 2,
//   'Q': 1,
//   'R': 6,
//   'S': 4,
//   'T': 6,
//   'U': 4,
//   'V': 2,
//   'W': 2,
//   'X': 1,
//   'Y': 2,
//   'Z': 1
// };

const Adagrams = {
  drawLetters() {
    const poolLetters = [];

    for (let [letter,quant] of Object.entries(this.letterQuantities)) {
      for (let i = 0; i < quant; i++) {
        poolLetters.push(letter);
      }
    }
    console.log(poolLetters)

    let indexArray = Array.from(poolLetters.keys());
    const sampleIndex = this.getSample(10, indexArray);
    // const sampleIndex = []
    // let size = 10;
    // for (let i = 1; i <= size; i++) {
    //   const randomIndex = Math.floor(Math.random() * (indexArray.length - i));
    //   sampleIndex.push(indexArray[randomIndex]);
    //   indexArray[randomIndex] = indexArray[indexArray.length - i];
    // };

    const lettersInHand = [];
    sampleIndex.forEach(index => lettersInHand.push(poolLetters[index]));
    console.log(lettersInHand)
    return lettersInHand;
  },
  usesAvailableLetters(input, lettersInHand) {
    const splitInput = input.toUpperCase().split('')
    let tenLetters = this.arrayToObject(lettersInHand)
    console.log(tenLetters)
    
    for (let char of splitInput) {
      if (tenLetters[char]) {
        tenLetters[char] -= 1;
        console.log(tenLetters)
      } else {
        return false;
      }
    }
    // for (let key in tenLetters) {
    //   if (tenLetters[key] < 0) {
    //     return false;
    //   }
    // }
    return true;
  },
  letterQuantities: {
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
  },
  getSample(total, inputArray) {
    const sampleArray = [];
    for (let i = 1; i <= total; i++) {
      const randomIndex = Math.floor(Math.random() * (inputArray.length - i));
      sampleArray.push(inputArray[randomIndex]);
      inputArray[randomIndex] = inputArray[inputArray.length - i];
    }
    return sampleArray;
  },
  arrayToObject(array) {
    const newObject = {}
    for (let element of array) {
      if (newObject[element]) {
        newObject[element] += 1;
      } else {
        newObject[element] = 1;
      }
    }
    return newObject;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
