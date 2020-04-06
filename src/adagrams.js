const Adagrams = {
  // wave 1
  drawLetters() {
    const sample = new Map([['A', 9], ['B', 2], ['C', 2], ['D', 4], ['E', 12], ['F', 2], ['G', 3], ['H', 2], ['I', 9], ['J', 1], ['K', 1], ['L', 4], ['M', 2], ['N', 6], ['O', 8], ['P', 2], ['Q', 1], ['R', 6], ['S', 4], ['T', 6], ['U', 4], ['V', 2], ['W', 2], ['X', 1], ['Y', 2], ['Z', 1]])
    const poolLetters = []
    for (let [letter, quantity] of sample) {
      for (let i = 0; i < quantity; i++) {
        poolLetters.push(letter)
      }
    }
    //randomize the pool of letters
    const theHand = []
    for (let i = 0; i < 10; i++) {
      let index = Math.random() * (poolLetters.length - 1); //'ll give us numbers from 0- length
      let letter = poolLetters[Math.round(index)];
      theHand.push(letter)
    }
    return theHand
  },

  // wave 2
  usesAvailableLetters(input, lettersInHand) {
    let givenLetters = input.split('');
    let selectedLetters = lettersInHand.slice();
    for (let letter of givenLetters) {
      if (selectedLetters.includes(letter)) {
        let letterToFind = selectedLetters.indexOf(letter);
        selectedLetters.splice(letterToFind, 1);
        //console.log(selectedLetters)
      }
      else {
        return false;
      }
    }
    return true;
  },
  // wave 3
  // Returns an integer representing the number of points
  // Each letter within word has a point value. The number 
  // of points of each letter is summed up to represent the 
  // total score of word
  scoreWord(word) {
    const score = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10,
    };
    let totalScore = 0;

    for (let i = 0; i < word.length; i++) {
      totalScore += score[word[i].toUpperCase()]
    }

    if (word.length > 6 && word.length <= 10) {
      totalScore += 8
    };
    return totalScore;

  },

  // wave 4
  //Add a function named highestScoreFrom 
  highestScoreFrom(words) {
    //Has one parameter: words, which is an array of strings


    // loop through each word and find the score each word
    let highestScore = -1;
    let highestScoredWord = "";
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      let currentScore = this.scoreWord(currentWord);
      console.log(currentWord + " " + currentScore)
      if (currentScore > highestScore) {
        highestScore = currentScore;
        highestScoredWord = currentWord
      }
      // else if the currentScore is === to the highestScore
      else if (currentScore === highestScore) {
        // tie breaker rule:
        // compare the currentWord to the highestScoredWord
        if (highestScoredWord.length < 10 && currentWord.length < 10 && highestScoredWord.length > currentWord.length) {
          highestScoredWord = currentWord
        }
        else if ((highestScoredWord.length >= 10 || currentWord.length >= 10) && currentWord.length > highestScoredWord.length) {
          highestScoredWord = currentWord
        }
      }
    }

    // return an object of highestScoredWord and highestScore  
    return { score: highestScore, word: highestScoredWord };

  }

};
// Do not remove this line or your tests will break!
export default Adagrams;


