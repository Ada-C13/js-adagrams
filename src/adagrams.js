
const deck = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 
'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I',
'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 
'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 
'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];

const letters = {
  'A' : {
    count: 9,
    score: 1
  },
  'B': {
    count: 2,
    score: 3
  },
  'C': {
    count: 2,
    score: 3
  },
  'D' : {
    count: 4,
    score: 2
  },
  'E' : {
    count: 12,
    score: 1
  },
  'F' : {
    count: 2,
    score: 4
  },
  'G' : {
    count: 3,
    score: 2
  },
  'H' : {
    count: 2,
    score: 4
  },
  'I' : {
    count: 9,
    score: 1
  },
  'J' : {
    count: 1,
    score: 8
  },
  'K' : {
    count: 1,
    score: 5
  },
  'L' : {
    count: 4,
    score: 1
  },
  'M' : {
    count: 2,
    score: 3
  },
  'N' : {
    count: 6,
    score: 1
  },
  'O' : {
    count: 8,
    score: 1
  },
  'P' : {
    count: 2,
    score: 3
  },
  'Q' : {
    count: 1,
    score: 10
  },
  'R' : {
    count: 6,
    score: 1
  },
  'S' : {
    count: 4,
    score: 1
  },
  'T' : {
    count: 6,
    score: 1
  },
  'U' : {
    count: 4,
    score: 1
  },
  'V' : {
    count: 2,
    score: 4
  },
  'W' : {
    count: 2,
    score: 4
  },
  'X' : {
    count: 1,
    score: 8
  },
  'Y' : {
    count: 2,
    score: 4
  },
  'Z' : {
    count: 1,
    score: 10
  }
}

// console.log(letters.A.count)

// for (const key in letters) {
//   console.log(key);
// }

// Fisher-Yates Algorithm
let arrayShuffle = function(arr){
  let newPos,
      temp;
  for(let i = arr.length - 1; i > 0; i -- ){
    newPos = Math.floor(Math.random() * i);
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp; 
  }
  return arr;
}


const Adagrams = {
  drawLetters() {
    let hand = [];
    for(let i = 0; i < 9; i++){
      hand.push(arrayShuffle(deck)[i]);
    }
    return hand
  },
};


console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
// export default Adagrams;
