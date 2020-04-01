const poolOfLetters = [
  ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
  ['B', 'B'],
  ['C', 'C'],
  ['D', 'D', 'D', 'D'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['F', 'F'],
  ['G', 'G', 'G'],
  ['H', 'H'],
  ['I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I'],
  ['J'],
  ['K'],
  ['L', 'L', 'L', 'L'],
  ['M', 'M'],
  ['N', 'N', 'N', 'N', 'N', 'N'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['P', 'P'],
  ['Q'],
  ['R', 'R', 'R', 'R', 'R', 'R'],
  ['S', 'S', 'S', 'S'],
  ['T', 'T', 'T', 'T', 'T', 'T'],
  ['U', 'U', 'U', 'U'],
  ['V', 'V'],
  ['W', 'W'],
  ['X'],
  ['Y', 'Y'],
  ['Z'],
];

const getrandNum = () => {
  return Math.floor(Math.random() * 26)
};

const Adagrams = {
  drawLetters() {
    const userHand = [];

    while (userHand.length < 10) {
      let randNum = getrandNum();
      let randLetter = poolOfLetters[randNum][0];
      if (userHand.filter(x => x == randLetter).length < poolOfLetters[randNum].length) {
        userHand.push(randLetter);
      };
    };

    return userHand
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
};

// Do not remove this line or your tests will break!
export default Adagrams;
