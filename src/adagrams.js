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
};

// Do not remove this line or your tests will break!
export default Adagrams;
