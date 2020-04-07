
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

const Adagrams = {
  makePool() {
    const letterPool = []
    for (const key in letters) {
      for(let i = 0; i < (letters[key]['count']); i++){
        letterPool.push(key);
      }
    }
    return letterPool
  },

  arrayShuffle(arr) {
    // Fisher-Yates Algorithm
    let newPos,
        temp;
    for(let i = arr.length - 1; i > 0; i -- ){
      newPos = Math.floor(Math.random() * i);
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp; 
    }
    return arr;
  },

  drawLetters() {
    let hand = [];
    for(let i = 0; i < 10; i++){
      hand.push(Adagrams.arrayShuffle(Adagrams.makePool())[i]);
    }
    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.split("");
    for(let i = 0; i < input.length; i++){
      if (lettersInHand.includes(input[i])){
        let lettersInHandIndexValue = lettersInHand.indexOf(input[i]);
        input.splice(i, 1);
        lettersInHand.splice(lettersInHandIndexValue, 1);
        i--;
      }
    }
    if(input.length === 0){
      return true
    } else{
      return false
    };
  },

  scoreWord(word) {
    word = word.split("")
    let total = 0;
    for(let i = 0; i < word.length; i++){
      for(const key in letters){
        if (key === word[i].toUpperCase()){
          total += letters[key]['score'];
        }
      }
    }
    if(word.length > 6){
      total += 8 
    }
    return total 
  },

  highestScoreFrom(words) {
    let bestScore = 0 
    let bestWords = []
    let shortestWordLength = 10
    let shortestWord = []

    for(let i = 0; i < words.length; i++){
      if(Adagrams.scoreWord(words[i]) > bestScore){
        bestScore = Adagrams.scoreWord(words[i]);
        bestWords = [words[i]];
      } else if (Adagrams.scoreWord(words[i]) === bestScore){
        bestWords.push(words[i]);
      } 
    }

    if (bestWords.length === 1){
      const winner = {
        word: bestWords[0], 
        score: Adagrams.scoreWord(bestWords[0])
      };
      return winner;
    } else {
      for( let i = 0; i < bestWords.length; i++){ 
        if(bestWords[i].length === 10){ 
          return {
            word: bestWords[i],
            score: Adagrams.scoreWord(bestWords[0])
          }
        } else { 
          if(bestWords[i].length < shortestWordLength){
            shortestWordLength = bestWords[i].length;
            shortestWord = [(bestWords[i])];
          } else if(bestWords[i].length === shortestWordLength){
            shortestWord.push(bestWords[i]);
          }
        }
      }
      const tieWinner = {
        word: shortestWord[0],
        score: Adagrams.scoreWord(shortestWord[0])
      }
      return tieWinner
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
