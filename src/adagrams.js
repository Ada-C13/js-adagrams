class Adagrams {
  // Implement this method for wave 1
  static createLetterPool() {
    const letter = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const quantity = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    
    let letterPool = [];

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
    let letterPool = this.createLetterPool();
    
    //randomly draw 10 letters from the shuffledLetterPoll
    let drawn = [];
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
    let inputLetters = input.toUpperCase().split("");
    //make a copy of the drawn letter 
    let dupInputLetters = inputLetters.slice();

    //1.empty array called timesTrue = []
    let timesTrue = [];
    
    // 2.Loop through each element of inputLetters and check to see if it exists in letterInHand
    dupInputLetters.forEach(element => {
      if (lettersInHand.includes(element) === true){
        timesTrue.push(true)
        //delete that letter from inputLetters to prevent the extra counts of letter
        let indexOfElement = lettersInHand.indexOf(element); //return the first index at which a given element can be found
        lettersInHand.splice(indexOfElement,1)
      }else{
        timesTrue.push(false);
      }
    });

    //find to see if there is any false in the timesTure array
    let isValid = undefined;
    if (timesTrue.includes(false) === true){
      isValid = false;
    }else{
      isValid = true;
    };
    return isValid;
  }

  //Wave 3
  static scoreWord (word){
    const wordArray = word.toUpperCase().split("");
    let score = 0;
    if (wordArray.lenght === 0){
      score = 0;
    }else{
      let scoreArray = [];
      wordArray.forEach(element => {
        switch(element){
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
            scoreArray.push(1);
            break;
          case 'D':
          case 'G':
            scoreArray.push(2);
            break;
          case 'B':
          case 'C':
          case 'M':
          case 'P':
            scoreArray.push(3);
            break;
          case 'F':
          case 'H':
          case 'V':
          case 'W':
          case 'Y':
            scoreArray.push(4);
            break;
          case 'K':
            scoreArray.push(5);
            break;
          case 'J':
          case 'X':
            scoreArray.push(8);
            break;
          case 'Q':
          case 'Z':
            scoreArray.push(10);
            break;
          default:
            scoreArray.push(0);
        };
      });
    //get the sum of scoreArray
      for(let i = 0; i < scoreArray.length; i++){
        score += scoreArray[i]
      }
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // score = scoreArray.reduce(reducer);
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
    console.log(allScores);
    
    const highestScore = Math.max.apply(null, allScores);
    console.log(highestScore);
    
    //Ties

    let tiedScores = [];
    wordScoreObjArray.forEach(obj =>{
      if (obj.score === highestScore){
        tiedScores.push(obj);
      }
    });
    // sort the tiedScores by length of words 
    
    let tiedScoreSorted = tiedScores.sort(function(a, b){
      return a.word.length-b.word.length;
  })
    console.log(tiedScoreSorted);

    // highestScoreFrom
    //   returns a hash that contains the word and score of best word in an array 
    //   accurately finds best scoring word even if not sorted
    if (tiedScoreSorted.length === 1){
      bestWordScore = tiedScoreSorted[0];
    }else if ((tiedScoreSorted[0].word.length !== tiedScoreSorted[tiedScoreSorted.length - 1].word.length) &&(tiedScoreSorted[tiedScoreSorted.length - 1].word.length === 10)){
      bestWordScore = tiedScoreSorted[tiedScoreSorted.length - 1];
    }else if (tiedScoreSorted[tiedScoreSorted.length - 1].word.length !== 10){
      bestWordScore = tiedScoreSorted[0];
    }else if ((tiedScoreSorted[0].word.length === tiedScoreSorted[tiedScoreSorted.length - 1].word.length) && (tiedScoreSorted[tiedScoreSorted.length - 1].word.length !== 10)){
      bestWordScore = tiedScoreSorted[0];
    }else{
      bestWordScore = tiedScoreSorted[0];
    }
    return bestWordScore;
  //return a single object represents the data of a winning word and its score.

  }
}
// Do not remove this line or your tests will break!
export default Adagrams;
