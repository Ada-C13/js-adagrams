// adagrams.js

// ----- HELPER FUNCTIONS -----

const createArray = function(obj) {
  const poolArray = [];

  for (let letter in obj) {
    let count = obj[letter];
    let i = 0; 
    while (i < count){
      poolArray.push(letter);
      i ++; 
    }
  }

  return poolArray;
}; 

/*  implementation of Fisher Yates shuffle algorithim : https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976 */
const shuffleArray = function (array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex); // produce random int
		currentIndex -= 1;

		// swap in place
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

// ----- MAIN OBJECT -----

const Adagrams = {
  pool: {
    A : 9, 	
    B : 2,	
    C : 2, 	
    D : 4, 	
    E : 12, 	
    F : 2, 	
    G : 3, 	
    H : 2, 	
    I : 9, 	
    J : 1, 	
    K : 1, 	
    L : 4, 	
    M : 2, 	
    N : 6,
    O : 8,
    P : 2,
    Q : 1,
    R : 6,
    S : 4,
    T : 6,
    U : 4,
    V : 2,
    W : 2,
    X : 1,
    Y : 2,
    Z : 1
  },

  drawLetters() {
    // set up
    const hand = [];
    const letterArray = createArray(Adagrams.pool);
    shuffleArray(letterArray);

    // choose hand
    for(let i = 0; i < 10 ; i++) {
      hand.push(letterArray[i]);
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    const inputArray = input.split('');
    const lettersUsed = {};

    if(inputArray.length > lettersInHand.length) return false;

    for(let letter in inputArray){
      if (lettersInHand.includes(inputArray[letter]) === false) return false;
    }; 

    return true;
    // for each letter in word
      // if word does not match a value in lettersinHand 
      // return false 

    // in word, find how many duplicates there are
    // compare against how many duplicates there are in hand 
    // if duplicates in word supersede duplicates in hand, return false

    // else return true


  },

  scoreWord(word) {

  },
  
  highestScoreFrom(words) {

  }
};

// Do not remove this line or your tests will break!
//export default Adagrams;

let hand = ['P', 'D', 'A', 'D', 'I', 'L', 'I', 'G', 'A', 'E']

console.log(Adagrams.usesAvailableLetters('yas', hand));