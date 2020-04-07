const Adagrams = {
  lettersPool: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z",],
  drawLetters() {
    const hand = []
    while (hand.length < 10) {
      let tileNumber = Math.round(Math.random() * 98);
      if (!hand.includes(tileNumber)) {
        hand.push(this.lettersPool[tileNumber]);
      }
    }
    return hand;
  },

  usesAvailableLetters(input, drawnHand) {
    const hash = {}

    for (let i = 0; i < drawnHand.length; i++) {
      hash[drawnHand[i]] != null ? hash[drawnHand[i]] += 1 : hash[drawnHand[i]] = 1
    };

    for (let i = 0; i < input.length; i++) {
      if (hash[input[i]] === undefined || hash[input[i]] === 0) return false;
      hash[input[i]]--;
    }
    return true;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
