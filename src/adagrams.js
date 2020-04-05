const Adagrams = {
  drawLetters() {    //wave one, no prams,  return an array of strings
    const lettersAmount = {   //how come this is not like this "lettersAmount:""
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
      'Z': 1,
    };
    const tilesArray = [];
    
    for (const key in lettersAmount) {
      for (let countToPush = 0; countToPush < lettersAmount[key]; countToPush++) {
        tilesArray.push(key); 
      }  
    }

    const randArray = [];
    let i = 0;
    while (i < 10) {
      let randNum = (Math.floor((Math.random() * 98) + 1));
      while (randArray.includes(randNum)){
        randNum = (Math.floor((Math.random() * 98) + 1));
      }

      randArray.push(randNum)
      i++;
    }

    const hand = [];
    randArray.forEach(num => hand.push(tilesArray[num]))

    return hand 
  },

  usesAvailableLetters(input, lettersInHand) {   // wave 2 return true or false if the input letter work with the hand
    const inputArray = input.split('');

    for (let i = 0; i < inputArray.length; i++ ){
      const handIndex = lettersInHand.indexOf(inputArray[i])

      if (handIndex === -1) {     // indexOf returns -1 if not found
        return false;
      }else {
        lettersInHand.splice(handIndex, 1);
      }
    }
    return true
  },

  scoreWord(word) {   //wave 3 Returns an integer representing the number of points
    const wordArray = word.split('');
    let wordScore = 0;

    wordArray.forEach (letter => {
      switch (letter.toUpperCase()){
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
        wordScore += 1;
        break;
      case 'G':
      case 'D':
        wordScore += 2;
        break;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        wordScore += 3;
        break;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        wordScore += 4;
        break;
      case 'K':
        wordScore += 5;
        break;
      case 'J':
      case 'X':
        wordScore += 8;
        break;
      case 'Q':
      case 'Z':
        wordScore += 10;
        break;
      }
    });
    
    if (wordArray.length > 6) {
    wordScore += 8;
    }

    return (wordScore);
  },

  highestScoreFrom (words) {    // wave 4 Returns a single object that represents the data of a winning word and its score
    let bestScoringWord = '';
    let bestScore = 0;
    let wordsValuesObject = {};

    //score each word with scoreWord function
    words.forEach (word => {
      const score = this.scoreWord(word);
      //put word and score in a object
      wordsValuesObject[word] = score;
      
      if (bestScore < score) {
        bestScore = score;
        bestScoringWord = word;
      }
      //console.log(`best score ${bestScore} and best word ${bestScoringWord} object ${wordsValuesObject}`);
    })
  
    const values = Object.values(wordsValuesObject);
    const keys = Object.keys(wordsValuesObject);

    let tieCount = [];
    for(let i = 0; i < values.length; ++i){
      if(values[i] == bestScore) {
        tieCount.push(keys[i]);
      }
    }

    if (tieCount.length > 1) {
      let bestTieWord = '';
      let tieLength = 0;

      tieCount.forEach (word =>{
        if (word.length === 10 && bestTieWord !== 10) {
          bestTieWord = word;
          tieLength = 1;
        }else if (tieLength === 0){
          bestTieWord = word;
          tieLength = word.length;
        }else if (word.length < tieLength) {
          bestTieWord = word;
          tieLength = word.length;
        }

      })
      bestScoringWord = bestTieWord
    }
    //console.log(`best tie word ${bestTieWord}`);
    return {word: bestScoringWord, score: bestScore};
  }
}




// Do not remove this line or your tests will break!
export default Adagrams;

