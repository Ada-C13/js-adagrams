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

    console.log(randArray)
    console.log(tilesArray.length)

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
      case 'G':
      case 'D':
        wordScore += 2;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        wordScore += 3;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        wordScore += 4;
        break;
      case 'K':
        wordScore += 5;
      case 'J':
      case 'X':
        wordScore += 8;
      case 'Q':
      case 'Z':
        wordScore += 10;
      }
    });
    
  if (wordArray.length > 6) {
    wordScore += 8;
  }

  return (wordScore);
  }
}

  



  //highestScoreFrom(words) {  // wave 4 Returns a single object that represents the data of a winning word and its score

  //}




// Do not remove this line or your tests will break!
export default Adagrams;

