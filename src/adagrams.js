
const Adagrams = {
  drawLetters() {
    const allLetters = {
  //pool of available letters and the qty they each have
      "A" : 9,
      "B" : 2, 
      "C" : 2, 
      "D" : 4, 
      "E" : 12, 
      "F" : 2, 
      "G" : 3, 
      "H" : 2, 
      "I" : 9, 
      "J" : 1, 
      "K" : 1, 
      "L" : 4, 
      "M" : 2, 
      "N" : 6, 
      "O" : 8, 
      "P" : 2, 
      "Q" : 1, 
      "R" : 6, 
      "S" : 4, 
      "T" : 6, 
      "U" : 4, 
      "V" : 2, 
      "W" : 2, 
      "X" : 1, 
      "Y" : 2, 
      "Z" : 1
    };
    
    // const scoreChart = {
    //   // chart of letters and thier respective point value
    //   "A" : 1, 
    //   "B" : 3, 
    //   "C" : 3, 
    //   "D" : 2, 
    //   "E" : 1, 
    //   "F" : 4, 
    //   "G" : 2, 
    //   "H" : 4, 
    //   "I" : 1, 
    //   "J" : 8, 
    //   "K" : 5, 
    //   "L" : 1, 
    //   "M" : 3, 
    //   "N" : 1, 
    //   "O" : 1, 
    //   "P" : 3, 
    //   "Q" : 10, 
    //   "R" : 1, 
    //   "S" : 1, 
    //   "T" : 1, 
    //   "U" : 1, 
    //   "V" : 4, 
    //   "W" : 4, 
    //   "X" : 8, 
    //   "Y" : 4, 
    //   "Z" : 10
    // };

  

    // Implement this method for wave 1
  
    let hand = [];
    
    // for (let i = 0; i < hand.length; i++){
    //   let rand = Math.floor(Math.random() * allLetters.length); hand.push(allLetters.splice(rand, 1)[0]);
    //   // allLetters.splice(rand, 1);
    //   // hand.splice(i, 1, letters[rand]);
      
    // }
    // return hand; 


    // let letters = allLetters
    // let hand = [];
    // for (let i = 0; i < 10; i ++) {
    //   let index = Math.floor(Math.random() * letters.length)
    //   let rand = letters[index];
    //   hand.push(rand);
    //   letters.splice(index, 1);
    // }
    // return hand;
  },

    usesAvailableLetters(word, drawn) {
    if (word.length > 10) {
      return false; 
    }

    let x = true;
    let j = 0;
    let i = 0;

    while (x === true && j < word.length) {
      if (drawn.includes(word[i])) {
        let x = drawn.indexOf(word[i])
        drawn.splice(x, 1);
        i ++;
        j ++;
      } else {
        x = false;
      }
    }
    return x;
  },
 
  scoreWord(word) {
    let playedWord = word.toLowerCase().split("");
    let score = 0;
    playedWord.forEach(function(letter) {
      switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "l":
        case "n":
        case "r":
        case "s":
        case "t":
          score += 1;
          break;
        case "d":
        case "g":
          score += 2;
          break;
        case "b":
        case "c":
        case "m":
        case "p":
          score += 3;
          break;
        case "f":
        case "h":
        case "v":
        case "w":
        case "y":
          score += 4;
          break;
        case "k":
          score += 5;
          break;
        case "j":
        case "x":
          score += 8;
          break;
        case "q":
        case "z":
          score += 10;
          break;
        default:
          score = 0;
          break;
      }
    });
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

