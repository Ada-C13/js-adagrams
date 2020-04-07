const Adagrams = {
  letters: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'],
  drawLetters() {
    let hand = [];
    const randLetters = [];
    let i = 0;
    while (i < 10) {
      //Partially taken from kennytm's answer to stackoverflow q @ https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
      let randLetter = this.letters[this.letters.length * Math.random() << 0];

      while (randLetters.includes(randLetter)) {
        randLetter = this.letters[this.letters.length * Math.random() << 0];
      };
      randLetters.push(randLetter);
      hand.push(randLetter);
      i++;
    };
    return hand;
  },
  usesAvailableLetters(word, lettersInHand) {
    const letters = word.toUpperCase().split('');
    // const arrayIntersection = [];
    // letters.forEach((letter) => {
    //   if (lettersInHand.includes(letter)) {
    //     arrayIntersection.push(letter);
    //   }
    // });
    const filteredLetters = [];
    letters.forEach(letter => {
      lettersInHand.forEach(handLetter => {
        if (letter === handLetter) {
          filteredLetters.push(letter);
          lettersInHand.splice(lettersInHand.indexOf(handLetter), 1);
        }
      });
    });
    return (letters.length === filteredLetters.length);
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

  const drawn = ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  const word = 'DOG';
  Adagrams.usesAvailableLetters(word, drawn);