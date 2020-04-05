// Helper Functions
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

// source : https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
const shuffleArray = function (array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

 // Main Object
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

  },

  scoreWord(word) {

  },
  
  highestScoreFrom(words) {

  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
