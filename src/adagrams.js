class Adagrams {
  static letters = {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,	
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1
  }

  static letterValues = {
    "A": 1,	
    "B": 3,	
    "C": 3,	
    "D": 2,	
    "E": 1,	
    "F": 4,
    "G": 2,	
    "H": 4,	
    "I": 1,	
    "J": 8,	
    "K": 5,	
    "L": 1,	
    "M": 3,	
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  }

  // Credit for shuffling function described at
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  static shuffle(array) {
    for (let r = array.length - 1; r > 0; r--) {
      const s = Math.floor(Math.random() * (r + 1));
      [array[r], array[s]] = [array[s], array[r]];
    }
  }


  // Wave 1
  static drawLetters() {
    let pool = [];
    for (let i in this.letters) {
      for (let j = this.letters[i]; j > 0; j--) {
        pool.push(i);
      }
    }
  
    this.shuffle(pool);

    //discards extra tiles so only 10 remain in pool array
    return pool.splice(88);
  }

  // Wave 2
  static usesAvailableLetters(input, drawn) {
    for (let i = 0; i < input.length; i++) {
      let currentLetter = input.charAt(i);
      if (!drawn.includes(currentLetter)) {
        return false;
      } else {
        // find index of current letter in drawn, then splice at that index
        let letterIndex = drawn.indexOf(currentLetter);
        // splice letter at that index from drawn
        drawn.splice(letterIndex, 1);
      }
    }
    return true;
  }

  // Wave 3
  static scoreWord(word) {
    let totalPoints = 0;
    const lettersToScore = word.toUpperCase().split('');
    if (lettersToScore.length >= 7) {
      totalPoints += 8;
    }

    lettersToScore.forEach((letter) => {
        totalPoints += this.letterValues[letter];
    });
  
    return totalPoints;
  }

  // Wave 4
  static totalScoreWord(word) {
    let score = this.scoreWord(word);
    return { word: word, score: score };
  }

  static highestScoreFrom(words) {
    let totalScores = words.map((word) => {
      return this.totalScoreWord(word);
    });

    totalScores = totalScores.sort((a, b) => {
      // return 1 if a comes after b
      // return -1 if a comes before b
      // return 0 if tied
      if (a.score > b.score) {
        // a's score is higher so it comes earlier in the array
        return -1;
      } else if (b.score > a.score) {
        // b wins
        return 1;
      } else {
        if(a.word.length === b.word.length){ return 0; } // both same so really a tie
        if(a.word.length === 10){ return -1; } // a is 10 so it wins
        if(b.word.length === 10){ return 1; } // b is 10 so it wins
        return a.word.length - b.word.length;
      }
    });

    return totalScores[0];
  }
}

export default Adagrams;