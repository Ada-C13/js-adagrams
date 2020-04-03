
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
    for(let i = 0; i < 10; i++){
      hand.push(arrayShuffle(deck)[i]);
    }
    return hand
  },
  usesAvailableLetters(input, lettersInHand) {
    input = input.split("");
    console.log(input);
    console.log(lettersInHand);
    for(let i = 0; i < input.length; i++){
      if (lettersInHand.includes(input[i])){
        let lettersInHandIndexValue = lettersInHand.indexOf(input[i]);
        input.splice(i, 1);
        lettersInHand.splice(lettersInHandIndexValue, 1);
        i--;
      }
    }
    // console.log(input);
    // console.log(lettersInHand);
    if(input.length === 0){
      return true
    } else{
      return false
    };
  }
};

Adagrams.usesAvailableLetters('hill', ['h', 'j', 'k', 'z', 'i'])




      // prev method takes input and compares lettersInHand, if item matches, deletes from input 
      // then deletes from lettersInHand
      // if input then === empty, return true 

// def uses_available_letters?(input, letter_in_hand)
//   input = input.chars //turns input into array 
//   hand = letter_in_hand.clone //duplicates hand to circumvent test
//   input.each_with_index { |input_value, input_index|
//     hand.each_with_index { |hand_value, hand_index|
//       if (input_value == hand_index)
//         input[input_index] = nil
//         hand.delete_at(hand_index)
//       end
//     }
//   }
//   input.reject!{ |item| item.nil? }
//   return input.empty?
// end

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
