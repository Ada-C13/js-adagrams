// make letters and quantities as a hash
let quantity = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1]

const a = 65;
const letterQuantity = {};
for (let i = 0; i < 26; i++) {
  letterQuantity[(String.fromCharCode(a + i))] = quantity[i]
};

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    // method to create letter pool
    // create a variable to hold letter pool, letterPool
    // iterate through the hash and add it to the array, letterPool
    // for each key and value, add the key to letterPool value amount of times

    // shuffle letters
    // google ways to shuffle array in JS

    // draw letters
    // draw 10 letters
  },
};



// Do not remove this line or your tests will break!
export default Adagrams;

