const Adagrams = {
drawLetters() {
  const tilesAmount = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
    Y:2, Z: 2
};


let tiles = []
for (let [key, value] of Object.entries(tilesAmount)) {
tiles.push(key.repeat(value).split(''));
}
tiles = tiles.flat()
// Shuffle array
const n = 10
const shuffled = tiles.sort(() => 0.5 - Math.random());
let hand = shuffled.slice(0, n);
return hand;
}

// usesAvailableLetters(input, lettersInHand) {
  
// }
}
// console.log(hand)

// Do not remove this line or your tests will break!
export default Adagrams;
