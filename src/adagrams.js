import { tsConstructorType } from "@babel/types";

class Adagrams {

  // constructor() {

  // }

  drawLetters() {
    const constLetterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];
    let playerHand = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * (constLetterPool.length + 1));
      playerHand.push(constLetterPool[randomNum]);
    };

    return playerHand;
  }

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    let checkAvail = {};

    for (const letter of lettersInHand) {
      if (checkAvail[letter] === undefined) {
        checkAvail[letter] = 1;
      } else {
        checkAvail[letter] += 1;
      };
    };

    for (const letter of inputArray) {
      if (checkAvail[letter] !== undefined) {
        checkAvail[letter] -= 1;
      } else {
        checkAvail[letter] = -1;
      };
    };

    for (const count of Object.values(checkAvail)) {
      if (count < 0) return false;
    };

    return true;
  }

  scoreWord(word) {
    const wordArray = word.toUpperCase().split('');
    let total = 0;

    const scoringTable = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    };

    for (const letter of wordArray) {
      for (const scoreLetter of Object.keys(scoringTable)) {
        if (scoringTable[scoreLetter].includes(letter)) total += Number(scoreLetter);
      };
    };

    if ([7, 8, 9, 10].includes(wordArray.length)) total += 8;
    return total;
  }

  highestScoreFrom(words) {
    let scoredWords = {};

    for (const word of words) {
      const score = this.scoreWord(word);
      
      if (scoredWords[score] !== undefined) {
        scoredWords[score].push(word);
      } else {
        scoredWords[score] = [word];
      };
    };

    const highestScore = Number( Object.keys(scoredWords)[ (Object.keys(scoredWords).length - 1) ] );
    
    if (scoredWords[highestScore].length === 1) {
      return {"score": highestScore, "word": scoredWords[highestScore][0]};
    } else {
      let foundWinner = this.tiebreaker(scoredWords[highestScore]);
      return {"score": highestScore, "word": foundWinner};
    };
  }

  tiebreaker(words) {
    let highestWord = words[0];
    
    for(const word of words) {
      if (word.length === 10 && highestWord.length !== 10) {
        highestWord = word;
      } else if (word.length < highestWord.length && highestWord.length !== 10) {
        highestWord = word;
      };
    };

    return highestWord;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;