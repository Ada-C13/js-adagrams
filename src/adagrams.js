// adagrams.js

// ----- HELPER FUNCTIONS -----

// convert letter pool object into an array 
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

// shuffle array using Fisher Yates shuffle algorithim : https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
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

// record the number of occurences of each element in an array
const elementCount = function (array) {
  const obj = {}; 

  array.forEach( function(i) {
    obj[i] = (obj[i] || 0) + 1;
  } ); 

  return obj;
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

  scoreChart : {
    1 : ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2 : ['D', 'G'],
    3 : ['B', 'C', 'M', 'P'],
    4 : ['F', 'H', 'V', 'W', 'Y'],
    5 : ['K'],
    8 : ['J', 'X'],
    10 : ['Q', 'Z']
  }, 

  drawLetters() {
    // set up data
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
    // set up data
    input = input.toUpperCase();
    const inputArray = input.split('');
    const handLetterCounts = elementCount(lettersInHand);
    const inputLetterCounts = elementCount(inputArray);

    // word should not be bigger than hand
    if(inputArray.length > lettersInHand.length) return false;

    // check for mismatching letters
    for(let letter in inputArray) {
      if (lettersInHand.includes(inputArray[letter]) === false) return false;
    }; 

    // compare count occurences    
    for(let key in inputLetterCounts) {
      if(inputLetterCounts[key] > handLetterCounts[key]) return false;
    };
  
    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase();
    const wordArray = word.split('');
    let score = 0; // assume no negative scores

    // add bonus points for long words
    if(wordArray.length >= 7 && wordArray.length <= 10) score += 8 ;
    
    // calculate score
    for(let letter in wordArray) {
      if(Adagrams.scoreChart['1'].includes(wordArray[letter])) score += 1;
      if(Adagrams.scoreChart['2'].includes(wordArray[letter])) score += 2;
      if(Adagrams.scoreChart['3'].includes(wordArray[letter])) score += 3;
      if(Adagrams.scoreChart['4'].includes(wordArray[letter])) score += 4;
      if(Adagrams.scoreChart['5'].includes(wordArray[letter])) score += 5;
      if(Adagrams.scoreChart['8'].includes(wordArray[letter])) score += 8;
      if(Adagrams.scoreChart['10'].includes(wordArray[letter])) score += 10;
    };

    return score; 
  },
  
  highestScoreFrom(words) {
    // create an obj of the words and their scores results 
    scoreResults = {};

    for (let word in words) {
      scoreResults[words[word]] = Adagrams.scoreWord(words[word]);
    };

    // find higest scored word 
    let vals = Object.values(scoreResults);

    return vals;

    // check if theres a tie 
    // if there's no tie, return highest scored word pair 
    // if there is a tie, apply logic to highest tied words
    // 
  }
};

// Do not remove this line or your tests will break!
// export default Adagrams;

const test = ['X', 'XX', 'XXX', 'XXXX']; 

console.log(Adagrams.highestScoreFrom(test));