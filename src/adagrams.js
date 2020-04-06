const Adagrams1 = {
  
  drawLetters() {
    // Implement this method for wave 1
    // Create hash of letterInfo with counts
    // https://stackoverflow.com/questions/6298169/how-to-create-a-hash-or-dictionary-object-in-javascript  
    const letterInfo = {
      'A' : 9,
      'N' : 6,
      'B' : 2,
      'O' : 8,
      'C' : 2,
      'P' : 2,
      'D' : 4,
      'Q' : 1,
      'E' : 12,
      'R' : 6,
      'F' : 2,
      'S' : 4,
      'G' : 3,
      'T' : 6,
      'H' : 2,
      'U' : 4,
      'I' : 9,
      'V' : 2,
      'J' : 1,
      'W' : 2,
      'K' : 1,
      'X' : 1,
      'L' : 4,
      'Y' : 2,
      'M' : 2,
      'Z' : 1
    };

    // Loop thru letterInfo and populate deck 
    // let = scope
    let deck = [];    
    //https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    //used ecmas2017 version of loop- ok per Devin
    for (const [key, value] of Object.entries(letterInfo)) {
      //console.log(key, value);
      //https://www.w3schools.com/js/js_loop_for.asp
      for (let i = 0; i < value; i++) {
        deck.push(key);
      }
      
    }
    //console.log(deck.length)

    // randomly pick 10 from deck
    let drawn = [];
    
    // create 10 times loop
    for (let i = 0; i < 10; i++) {
      //https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
      // get a random index from 0 to the length of deck
      let index = Math.floor(Math.random() * deck.length);
      // push the letter at the random index
      drawn.push(deck[index])
      // remove the letter from deck array
      deck.splice(index, 1);
    }
    return drawn
  }, //end of drawLetters

  //-------------------------------------------------------------------
  // example: input = "doo"
  // lettersinhand = a,b,y,d,o,g

  usesAvailableLetters(input, lettersInHand) {
    // parse string input to get array of letters
    let letters = input.split('');
    console.log(letters);
    // loop through array of letters
    // https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      // check if letter is included in lettersinHand 
      if (lettersInHand.includes(letter)) {
        //remove letter from lettersinHand
        var index = lettersInHand.indexOf(letter);
        if (index !== -1) lettersInHand.splice(index, 1);
      } else {
        // if not included, return false
        return false;
      } 
    }
    //return true when gone through all letters
    return true;
  }, //end of usesAvailableLetters

  //------------------------------------------------------------------
  //example: word: "dog"
  //score = 2+1+2 = 5

  scoreWord(word) {
     //create letterScore
    const letterScore = {
      'A' : 1,
      'N' : 1,
      'B' : 3,
      'O' : 1,
      'C' : 3,
      'P' : 3,
      'D' : 2,
      'Q' : 10,
      'E' : 1,
      'R' : 1,
      'F' : 4,
      'S' : 1,
      'G' : 2,
      'T' : 1,
      'H' : 4,
      'U' : 1,
      'I' : 1,
      'V' : 4,
      'J' : 8,
      'W' : 4,
      'K' : 5,
      'X' : 8,
      'L' : 1,
      'Y' : 4,
      'M' : 3,
      'Z' : 10
    };

    //initialize total
    let total = 0;
    //parse word into array of letters
    let letters = word.toUpperCase().split('');
    //if array of letters ===7,8,9,10
    if (letters.length >= 7 && letters.length <= 10) {
      //additional 8 points
      total += 8;
    }
    //loop through array of letters to find assigned value for that letter
    for (let i = 0; i < letters.length; i++) {
    //add values
      total = total + letterScore[letters[i]];
    }
    // return score that is integer
    return total;  
  },//end of scoreWord
  //------------------------------------------------------------------
  //example: ["dog", "cheese", "no"]
  //result: cheese: 11
  highestScoreFrom(words) {
    //create empty object
    let winningWord = {
      "word": '',
      "score": 0
  };
  // loop thru each word using for/in to go through every property in object
  // https://www.w3schools.com/js/js_loop_for.asp
  for (let i in words) {
    let currentWord = words[i]
    let currentScore = this.scoreWord(currentWord);
    // compare current word score to winning word score
    // if better score make current word the winning word
    if (currentScore > winningWord.score) {
        winningWord.score = currentScore;
        winningWord.word = currentWord;
    } else if (currentScore === winningWord.score){
      //tie break logic for currentscore == winningword.score

      //check currentWord.length if it's not equal to 10, winningword has a chance
      if(winningWord.word.length != 10) {
        //does currentWord equal to 10
        if(currentWord.length === 10) {
          winningWord.word = currentWord;
          winningWord.score = currentScore;
        }
        else if (currentWord.length < winningWord.word.length) {
          //check currentword.length is larger than winningword.word.length
          //if length of currentword > winningword.word.length
          //currentWord is the winner
          winningWord.word = currentWord;
          winningWord.score = currentScore;
        }
      }
    }
  }
  //return winning word and score
  return winningWord;
  }, //end of highestScoreFrom


}; //const Adagrams


//OPTIONAL: Class version of ADAgrams. Left above code for testing purposes.
class Adagrams {
  constructor() {
  }

  static drawLetters() {
    // Implement this method for wave 1
    // Create hash of letterInfo with counts
    // https://stackoverflow.com/questions/6298169/how-to-create-a-hash-or-dictionary-object-in-javascript  
    const letterInfo = {
      'A' : 9,
      'N' : 6,
      'B' : 2,
      'O' : 8,
      'C' : 2,
      'P' : 2,
      'D' : 4,
      'Q' : 1,
      'E' : 12,
      'R' : 6,
      'F' : 2,
      'S' : 4,
      'G' : 3,
      'T' : 6,
      'H' : 2,
      'U' : 4,
      'I' : 9,
      'V' : 2,
      'J' : 1,
      'W' : 2,
      'K' : 1,
      'X' : 1,
      'L' : 4,
      'Y' : 2,
      'M' : 2,
      'Z' : 1
    };

    // Loop thru letterInfo and populate deck 
    // let = scope
    let deck = [];    
    //https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    //used ecmas2017 version of loop- ok per Devin
    for (const [key, value] of Object.entries(letterInfo)) {
      //console.log(key, value);
      //https://www.w3schools.com/js/js_loop_for.asp
      for (let i = 0; i < value; i++) {
        deck.push(key);
      }
      
    }
    //console.log(deck.length)

    // randomly pick 10 from deck
    let drawn = [];
    
    // create 10 times loop
    for (let i = 0; i < 10; i++) {
      //https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
      // get a random index from 0 to the length of deck
      let index = Math.floor(Math.random() * deck.length);
      // push the letter at the random index
      drawn.push(deck[index])
      // remove the letter from deck array
      deck.splice(index, 1);
    }
    return drawn
  } //end of drawLetters

    //-------------------------------------------------------------------
  // example: input = "doo"
  // lettersinhand = a,b,y,d,o,g

  static usesAvailableLetters(input, lettersInHand) {
    // parse string input to get array of letters
    let letters = input.split('');
    console.log(letters);
    // loop through array of letters
    // https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      // check if letter is included in lettersinHand 
      if (lettersInHand.includes(letter)) {
        //remove letter from lettersinHand
        var index = lettersInHand.indexOf(letter);
        if (index !== -1) lettersInHand.splice(index, 1);
      } else {
        // if not included, return false
        return false;
      } 
    }
    //return true when gone through all letters
    return true;
  } //end of usesAvailableLetters

  //------------------------------------------------------------------
  //example: word: "dog"
  //score = 2+1+2 = 5

  static scoreWord(word) {
     //create letterScore
    const letterScore = {
      'A' : 1,
      'N' : 1,
      'B' : 3,
      'O' : 1,
      'C' : 3,
      'P' : 3,
      'D' : 2,
      'Q' : 10,
      'E' : 1,
      'R' : 1,
      'F' : 4,
      'S' : 1,
      'G' : 2,
      'T' : 1,
      'H' : 4,
      'U' : 1,
      'I' : 1,
      'V' : 4,
      'J' : 8,
      'W' : 4,
      'K' : 5,
      'X' : 8,
      'L' : 1,
      'Y' : 4,
      'M' : 3,
      'Z' : 10
    };

    //initialize total
    let total = 0;
    //parse word into array of letters
    let letters = word.toUpperCase().split('');
    //if array of letters ===7,8,9,10
    if (letters.length >= 7 && letters.length <= 10) {
      //additional 8 points
      total += 8;
    }
    //loop through array of letters to find assigned value for that letter
    for (let i = 0; i < letters.length; i++) {
    //add values
      total = total + letterScore[letters[i]];
    }
    // return score that is integer
    return total;  
  }//end of scoreWord

  //------------------------------------------------------------------
  //example: ["dog", "cheese", "no"]
  //result: cheese: 11
  static highestScoreFrom(words) {
    //create empty object
    let winningWord = {
      "word": '',
      "score": 0
  };
  // loop thru each word using for/in to go through every property in object
  // https://www.w3schools.com/js/js_loop_for.asp
  for (let i in words) {
    let currentWord = words[i]
    let currentScore = this.scoreWord(currentWord);
    // compare current word score to winning word score
    // if better score make current word the winning word
    if (currentScore > winningWord.score) {
        winningWord.score = currentScore;
        winningWord.word = currentWord;
    } else if (currentScore === winningWord.score){
      //tie break logic for currentscore == winningword.score

      //check currentWord.length if it's not equal to 10, winningword has a chance
      if(winningWord.word.length != 10) {
        //does currentWord equal to 10
        if(currentWord.length === 10) {
          winningWord.word = currentWord;
          winningWord.score = currentScore;
        }
        else if (currentWord.length < winningWord.word.length) {
          //check currentword.length is larger than winningword.word.length
          //if length of currentword > winningword.word.length
          //currentWord is the winner
          winningWord.word = currentWord;
          winningWord.score = currentScore;
        }
      }
    }
  }
  //return winning word and score
  return winningWord;
  } //end of highestScoreFrom

}//end of class Adagrams

//const Adagrams = new AdagramsClass()

// Do not remove this line or your tests will break!
export default Adagrams;


//test code
// const drawn = Adagrams.drawLetters();
// console.log(drawn)
// console.log(Adagrams.usesAvailableLetters("blah", ["a","n","y"]))
// console.log(Adagrams.scoreWord("cheese"))
// console.log(Adagrams.highestScoreFrom(["dog", "cheese", "no"]))