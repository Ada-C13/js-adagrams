const randomItems = function(items) {
  return items[Math.floor(Math.random()*items.length)];
};

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterDist = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    const handSize = 10;
    // letter A character code= 65;
    const allLetters = letterDist.map((dist, index) => { 
      return String.fromCharCode(index + 65).repeat(dist)
    }); 
    const letterPool = allLetters.join('').split('');
    let hand = [];
    for (let i = 0; i < handSize; i += 1) {
      const rand = randomItems(letterPool)
      hand.push(rand);
    };
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let handCopy = lettersInHand.slice();
    // console.log(handCopy)
    input.toUpperCase().split('').forEach(letter => {
      if (handCopy.includes(letter)) {
        handCopy.splice(letter);
      } else {
        return false;
      }
    });
    return true;
  },

  scoreWord(word) {
    let letterValues = word.toUpperCase().split('').map(letter => {
      switch(letter) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        case "L":
        case "N":
        case "R":
        case "S":
        case "T":
          1;
          break;
        case "D":
        case "G":
          2;
          break;
        case "B":
        case "C":
        case "M":
        case "P":
          3;
          break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
          4;
          break;
        case "K":
          5;
          break;
        case "J":
        case "X":
          8;
          break;
        case "Q":
        case "Z":
          10;
          break;
      };   
    });

    
    if (word.length >= 7 && word.length <= 10) {
      letterValues.push(8);
    };
    
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    return arrSum(letterValues);
  },

  highestScoreFrom(words) {

  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
