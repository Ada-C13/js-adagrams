const Adagrams = {

  drawLetters() {

    const LetterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];

    // Implement this method for wave 1
    const Hand = []
    // Random selection logic inherited from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    for (let i = 0; i < 10; i ++) {
      Hand.push(
        LetterPool[Math.floor(Math.random() * LetterPool.length)]
      );
    };
    return Hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let anagramLetters = input.split('');
    let matches = 0;
    WORD_LETTERS: for (let i = 0; i < anagramLetters.length; i++) {
      HAND_LETTERS: for (let j = 0; j < lettersInHand.length; j++) {
        if (anagramLetters[i] === lettersInHand[j]) {
          lettersInHand.splice(j, 1);
          matches++;
          continue WORD_LETTERS;
        };
      };
    };
    if (matches === anagramLetters.length) {
      return true;
    } else {
      return false;
    };
  },

  scoreWord(word) {
    const pointValues = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10
    };
    let anagramLetters = word.toUpperCase().split('');
    let points = 0;
    if (anagramLetters.length >= 7) {
      points += 8
    };
    for (let i = 0; i < anagramLetters.length; i++) {
      points += pointValues[anagramLetters[i]];
    };
    return points;
  },

  // It's late, I give up!!!
  
  // highestScoreFrom (words) {
  //   let results  = {};
  //   let wordScores = {};
  //   let longestWord = '';
  //   let shortestWord = '';
  //   let tiedWords = {};

  //   for (i = 0; i < words.length; i++) {
  //     wordScores.words[i] = scoreWord(words[i]);
  //     if (words[i] > longestWord.length) {
  //       longestWord = '${words[i]}';
  //     } else if (words[i] < shortestWord.length) {
  //       shortestWord = '${words[i]}';
  //     };
  //   };
    
  //   for (let comparisonWord in wordScores) {
  //     for (let comparetoWord in wordScores) {
  //       if (comparisonWord === comparetoWord) {
  //         tiedWords.comparisonWord = wordScores[comparisonWord]
  //         tiedWords.comparetoWord = wordScores[comparetoWord]
  //       };
  //     };
  //   };

  //   let shortestTied = ''
  //   const tiedWordsText = tiedWords.keys

  //   for (let i = 0; i < tiedWordsText.length; i++) {
  //     if (tiedWordsText[i].length < shortestTied) {
  //       shortestTied = '${tiedWordsText[i].length}'
  //     };
  //   };

  //   if 
  // }

};

// Do not remove this line or your tests will break!
export default Adagrams;
