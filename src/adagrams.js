const Adagrams = {
  const = 'letters' = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'],
  randomLetter(letters) {
    //Taken from kennytm's answer to stackoverflow q @ https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
    return letters[letters.length * Math.random() << 0];
  },
  drawLetters() {
    // Implement this method for wave 1
    let hand = {};
    let i = 0;
    while (i < 10) {
      hand.push(randomLetter(this.letters));
      i++;
    };
    return hand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;