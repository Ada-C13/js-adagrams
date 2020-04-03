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