class Adagrams {
  static drawLetters = function() { 
    let bigPoolOfLetters = {
      A : 9,
      B : 2,
      C : 2,
      D : 4,
      E : 2,
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
      X : 2,
      Z : 1,
    }
    const allLeters = [];
    for(let [letter, numbers] of Object.entries(bigPoolOfLetters)){
      for(let i = 0; i<numbers; i++){
        allLeters.push(letter);
      };
    };

    const userLetters = [];
    while(userLetters.length < 10){
      
      const randLetter = allLeters[Math.floor(Math.random() * Math.floor(allLeters.length))];

      if(bigPoolOfLetters[randLetter] !== 0){
        userLetters.push(randLetter);
        bigPoolOfLetters[randLetter] -= 1;
      };
    };

    return userLetters;
  };
  
  static usesAvailableLetters = function(input, lettersInHand){

    const inputUpCase = input.toUpperCase();

    const arrayWithTenLetters = lettersInHand.slice();

    for (let i = 0; i < inputUpCase.length; i++){
      if (arrayWithTenLetters.includes(inputUpCase[i])){
        ///Splice methode will delete the index if above condition is true, 1 in the end tell the will delete only one element
        arrayWithTenLetters.splice(arrayWithTenLetters.indexOf(inputUpCase[i]), 1);
      } else {
        return false;
      };
    };
    return true;
  };

  static scoreWord = function(word){
    const wordUpCase = word.toUpperCase();
    
    let extraPoints = 0;

    if (wordUpCase.length === 0){
      return 0;
    } else if (wordUpCase.length >= 7){
      extraPoints = 8;
    }else{
      extraPoints = 0;
    };

    const splitWord = wordUpCase.split('');

    const points = splitWord.map(letter =>{
      switch (letter) {
        case "A": case "E": case "I": case "O": case "U": case "L": case "N": case "R": case "S": case "T":
          return 1;
        case "D": case "G":
          return 2;
        case "B": case "C": case "M": case "P":
          return 3;
        case "F": case "H": case "V": case "W": case "Y":
          return 4;
        case "K":
          return 5;
        case "J": case "X":
          return 8;
        case "Q": case "Z":
          return 10;
      };
    });

    const total = points.reduce(function(a, b){ return a + b;}, 0) + extraPoints;
    return total;
  };

  static highestScoreFrom = function(words){
   
    let maxScore = 0;
    let maxScoreWord = "";
    
    let i = 0;
    while(i < words.length){
      //called the function to get the score for the each word from the array
      const scoreOfword = this.scoreWord(words[i]);
  
      if (scoreOfword > maxScore){
        maxScore = scoreOfword;
        maxScoreWord = words[i];
      }else if (scoreOfword === maxScore){
        //selects the first word when both have same length
        if(words[i].length === maxScoreWord.length){
        return {word: maxScoreWord, score: maxScore};
        }else if (words[i].length === 10){
          maxScoreWord = words[i]
        //selects the word with fewer letters when neither are 10 letters
        }else if (words[i].length < maxScoreWord.length && maxScoreWord.length !== 10){
          maxScoreWord = words[i];
        };
      };
      i++
    };
    return {word: maxScoreWord, score: maxScore};
  };
};

export default Adagrams;

