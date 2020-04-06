const Adagrams = {
  poolOfLetters: [
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F',
    'G', 'G', 'G',
    'H', 'H',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'J',
    'K',
    'L', 'L', 'L', 'L',
    'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
    'P', 'P',
    'Q',
    'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S',
    'T', 'T', 'T', 'T', 'T', 'T',
    'U', 'U', 'U', 'U',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z',
  ],

  getrandNum() {
    return Math.floor(Math.random() * this.poolOfLetters.length)
  },

  drawLetters() {
    const userHand = [];

    while (userHand.length < 10) {
      let randNum = this.getrandNum();
      let randLetter = this.poolOfLetters[randNum];
      userHand.push(randLetter);
      this.poolOfLetters.splice(randNum, 1);
    };

    return userHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    for(let i = 0; i < input.length; i++) {
      let currentLetter = input[i];
      if (input.split(currentLetter).length - 1 > lettersInHand.filter(x => x == currentLetter).length) {
        return false;
      };
    };

    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase();
    let extraPoints = 0;

    if (word.length == 0) {
      return 0;
    } else if (word.length >= 7) {
      extraPoints = 8;
    };

    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      switch (char) {
        case 'A': case 'E': case 'I': case 'O': case 'U': case 'L': case 'N': case 'R': case 'S': case 'T':
          sum += 1;
          break;
        case 'D': case "G":
          sum += 2;
          break;
        case 'B': case "C": case "M": case "P":
          sum += 3;
          break;
        case 'F': case "H": case "V": case "W": case "Y":
          sum += 4;
          break;
        case 'K':
          sum += 5;
          break;
        case 'J': case "X":
          sum += 8;
          break;
        case 'Q': case "Z":
          sum += 10;
          break;
      };
    };

    return sum + extraPoints;
  },

  highestScoreFrom(words) {
    const winner = {
      word: '',
      score: 0
    };

    words.forEach(word => {
      let score = this.scoreWord(word);
      if (score > winner.score) {
        winner.score = score;
        winner.word = word;
      } else if (score == winner.score) {
        if (word.length != 10 && winner.word.length != 10) {
          if (word.length < winner.word.length) {
            winner.score = score;
            winner.word = word;
          };
        } else if (word.length == 10 && winner.word.length != 10) {
          winner.score = score;
          winner.word = word;
        };
      };
    });

    return winner;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
