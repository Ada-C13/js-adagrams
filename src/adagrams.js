// > Object.entries({a: 1, b: 2})
// [ [ 'a', 1 ], [ 'b', 2 ] ]
// > Object.keys({a: 1, b: 2})
// [ 'a', 'b' ]
// > Object.values({a: 1, b: 2})
// [ 1, 2 ]


const Adagrams = {
  // this is a function inside of an object
  // it's the same as writing ==> drawLetters: function() {...}
  drawLetters() {
    const letters = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'f', 'f', 'g', 'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'j', 'k', 'l', 'l', 'l', 'l', 'm', 'm', 'n', 'n', 'n','n', 'n', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'p', 'p', 'q', 'r', 'r', 'r', 'r', 'r', 'r', 's', 's', 's', 's', 't', 't', 't', 't', 't', 't', 'u', 'u', 'u', 'u', 'v', 'v', 'w', 'w', 'x', 'y', 'y', 'z'];

    const lettersInHand = [];
    // Fisher-Yates (aka Knuth) Shuffle Method discovered on Stack Overflow here: https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    for(let i = 0; i < 10; i++) {
      let letter = letters[Math.floor(Math.random()*letters.length)];
      
      lettersInHand.push(letter.toUpperCase());
    };

    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = lettersInHand.map((letter) => letter);
  
    const splitInput = input.split('');
        
    for (let i = 0; i < splitInput.length; i++) {
      if (lettersInHandCopy.includes(splitInput[i])) {
        const index = lettersInHandCopy.indexOf(splitInput[i]);
        lettersInHandCopy.splice(index, 1);
      } else {
        return false;
      };
  
    };
    return true;
  },

  scoreWord(word) {
    let score = 0;
  
    if (word.length > 6) {
      score += 8
    };
  
    const wordArray = word.toUpperCase().split('');
  
    // could use word.charAt(index)
    for (const char of wordArray) {
      switch(char) {
        case 'A':
        case 'E': 
        case 'I': 
        case 'O': 
        case 'U': 
        case 'L': 
        case 'N': 
        case 'R': 
        case 'S':
        case 'T':
          score += 1;
          break;
        case 'D':
        case 'G':
          score += 2;
          break;
        case 'B':
        case 'C': 
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F': 
        case 'H': 
        case 'V': 
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'k':
          score += 5;
          break;
        case 'J': 
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
      }
    };
    return score;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;


// const letters = {
//   a: 9,
//   b: 2,
//   c: 2,
//   d: 4,
//   e: 12,
//   f: 2,
//   g: 3,
//   h: 2,
//   i: 9,
//   j: 1,
//   k: 1,
//   l: 4,
//   m: 2,
//   n: 6,
//   o: 8,
//   p: 2,
//   q: 2,
//   r: 6,
//   s: 4,
//   t: 6,
//   u: 4,
//   v: 2,
//   w: 2,
//   x: 1,
//   y: 2,
//   z: 1,
// };