class Adagrams {
  // Implement this method for wave 1
  static createLetterPool() {
    const letter = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const quantity = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    
    const letterPool = [];

    for (let i = 0; i < 26 ; i++){
      let j = 0;
      while (j < quantity[i]){
        letterPool.push(letter[i]);
        j++;
      };
    };
    return letterPool;
  }

  static drawLetters() {
    const letterPool = this.createLetterPool();
    
    //randomly draw 10 letters from the shuffledLetterPoll
    const drawn = [];
    for (let i = 0; i <10; i++){
      let index = Math.floor(Math.random()*letterPool.length); //get the index
      drawn.push(letterPool[index]);
      //remove that index from that the letterPool 
      letterPool.splice(index, 1);
    };
    return drawn;
  }

  //Wave 2
  static usesAvailableLetters(input, lettersInHand){
    const inputLetters = input.toUpperCase().split("");
    //make a copy of the drawn letter 
    const dupInputLetters = lettersInHand.slice();
    //Loop through each element of inputLetters and check to see if it exists in letterInHand
    for (let i = 0; i < inputLetters.length; i++){
      if (dupInputLetters.includes(inputLetters[i])){
        // timesTrue.push(true)
        //delete that letter from inputLetters to prevent the extra counts of letter
        let indexOfElement = dupInputLetters.indexOf(inputLetters[i]); //return the first index at which a given element can be found
        dupInputLetters.splice(indexOfElement,1);
      }else{
        return false;
      }; 
    };
    return true;
  };

  //Wave 3
  static scoreWord (word){
    const wordArray = word.toUpperCase().split("");
    let score = 0;
    if (wordArray.length === 0){
      score = 0;
    }else{
      wordArray.forEach(element => {
        switch(element){
          case 'A': case 'E': case 'I': case 'O': case 'U': case 'L': case 'N': case 'R': case 'S': case 'T':
            score += 1;
            break;
          case 'D': case 'G':
            score += 2;
            break;
          case 'B': case 'C': case 'M': case 'P':
            score += 3;
            break;
          case 'F': case 'H': case 'V': case 'W': case 'Y':
            score += 4;
            break;
          case 'K':
            score += 5;
            break;
          case 'J': case 'X':
            score += 8;
            break;
          case 'Q': case 'Z':
            score += 10;
            break;
        };
      });

      if (word.length >= 7){
        score += 8;
      }else{
        score = score;
      };
    };
    return score; 
  }

  static highestScoreFrom(words){
    const wordScoreObjArray = [];
    let wordScoreObj = null;
    words.forEach(element =>{
        wordScoreObj ={
        word: element,
        score: this.scoreWord(element)
      };
      wordScoreObjArray.push(wordScoreObj);
    })
    // find the highest score
    let bestWordScore = null; //object 
    let allScores = [];
    wordScoreObjArray.forEach(obj =>{
      allScores.push(obj.score);
    });

    const highestScore = Math.max.apply(null, allScores);
    
    //Ties
    let tiedScores = [];
    wordScoreObjArray.forEach(obj =>{
      if (obj.score === highestScore){
        tiedScores.push(obj);
      }
    });
    // sort the tiedScores by length of words 
    //reference: http://www.javascriptkit.com/javatutors/arraysort2.shtml
    let tiedScoreSorted = tiedScores.sort(function(a, b){
      return a.word.length-b.word.length;
  })
    // highestScoreFrom 
    // we know that the max length of the string is 10
    if (tiedScoreSorted.length === 1){
      bestWordScore = tiedScoreSorted[0];
    // selects the word with 10 letters, pick the last index of that 10 letters
    }else if ((tiedScoreSorted[0].word.length !== tiedScoreSorted[tiedScoreSorted.length - 1].word.length) &&(tiedScoreSorted[tiedScoreSorted.length - 1].word.length === 10)){
      bestWordScore = tiedScoreSorted[tiedScoreSorted.length - 1];
    // selects the word with fewer letters when neither are 10 letters
    }else if (tiedScoreSorted[tiedScoreSorted.length - 1].word.length !== 10){
      bestWordScore = tiedScoreSorted[0];
    //selects the first word when both have same length
    }else if ((tiedScoreSorted[0].word.length === tiedScoreSorted[tiedScoreSorted.length - 1].word.length) && (tiedScoreSorted[tiedScoreSorted.length - 1].word.length !== 10)){
      bestWordScore = tiedScoreSorted[0];
    }else{
      bestWordScore = tiedScoreSorted[0];
    }
    return bestWordScore;
  }
}
// Do not remove this line or your tests will break!
export default Adagrams;
