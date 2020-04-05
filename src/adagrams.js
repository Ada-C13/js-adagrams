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
      //figure out if there are more than two of the highest score put the word in a variable to campare them
    const values = Object.values(wordsValuesObject);

    let tieCount = 0;
    for(let i = 0; i < values.length; ++i){
      if(values[i] == bestScore) {
        tieCount++;
      }
    }

    console.log(`object values ${Object.values(wordsValuesObject)} count ${tieCount} `);


    //figure out if there are more than two of the highest score put the word in a variable to campare them
    //if that tie variable is greater than length  2  go in to testing the tie
    //create holder variables for the bestTieWord and tieLength 
    //If the word 10 in length if yes return that word!
    //else if the tieLenght variable is still 0  we need to input the first item that comes in as our base in our holder variables
    //elsif the word is shorter than the tieLength  variable we want to set that to our holder variables
    //return the holder variables in an object
  }


}




// Do not remove this line or your tests will break!
export default Adagrams;

