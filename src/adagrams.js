const Adagrams = {
  drawLetters: function() {
    const letterDist = {
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
    };
    let letterPool = []
    // create letterPool
    for (const letter in letterDist) {
      for (let i = 0; i < letterDist[letter]; i++) {
        letterPool.push(letter);
      } 
    }
    // shuffle letterPool, used the Fisher Yates model from https://bost.ocks.org/mike/shuffle/
    let letterPoolClone = letterPool.map((x) => x);
    let m = letterPoolClone.length;
    let t = null;
    let i = null;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = letterPoolClone[m];
      letterPoolClone[m] = letterPoolClone[i];
      letterPoolClone[i] = t;
    }
  const chosenLetters = letterPoolClone.slice(0,10);
  return chosenLetters;
  },

  usesAvailableLetters: function(input, lettersInHand) {
    for(let i = 0; i < input.length; i++) {
      if(lettersInHand.includes(input[i])){
        lettersInHand.splice(lettersInHand.indexOf(input[i]), 1 );
      } else {
        return false;
      }
    }
  return true
  },

  scoreWord: function(word) {
    let numPoints = 0
    let letterScores = {
    'A':1, 'E':1, 'I':1, 'O':1, 'U':1, 'L':1, 'N':1, 'R':1, 'S':1, 'T':1, 'D':2, 'G':2, 'B':3, 'C':3, 'M':3, 'P':3, 'F':4, 'H':4, 'V':4, 'W':4, 'Y':4, 'K':5,'J':8, 'X':8,'Q':10, 'Z':10
    }

    for(let i = 0; i < word.length; i++){
      numPoints += letterScores[word[i].toUpperCase()];
    }

    if(word.length >= 7){
      numPoints += 8
    }
    
    return numPoints;
  },

  highestScoreFrom: function(words) {
    let winningWord = "";
    let winningWordScore = 0;
    for(let i = 0; i < words.length; i++) {
      let wordsScore = this.scoreWord(words[i]);
      if(wordsScore > winningWordScore) {
        winningWordScore = wordsScore;
        winningWord = words[i];
      }else if(wordsScore === winningWordScore){
        if(words[i].length === 10 && winningWord.length !== 10){
          winningWordScore = wordsScore;
          winningWord = words[i];
        }else if(words[i].length < winningWord.length && winningWord.length !== 10){
          winningWordScore = wordsScore;
          winningWord = words[i];
        }
      };
    };
    return {word: winningWord, score: winningWordScore};
  
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

// console.log(Adagrams.drawLetters())
