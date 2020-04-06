const Adagrams = {
  drawLetters() {
    // Declare letter distribution pool in an array
    const pool = [
      { A: 9 }, { B: 2 }, { C: 2 }, { D: 4 }, { E: 12 }, { F: 2 }, { G: 3 }, { H: 2 },
      { I: 9 }, { J: 1 }, { K: 1 }, { L: 4 }, { M: 2 }, { N: 6 }, { O: 8 }, { P: 2 }, { Q: 1 },
      { R: 6 }, { S: 4 }, { T: 6 }, { U: 4 }, { V: 2 }, { W: 2 }, { X: 1 }, { Y: 2 }, { Z: 1 }
    ];

    // Populate player's hand 
    let lettersInHand = [];

    // Create Sattolo Cycle implementation for shuffle
    function sattoloShuffle(pool) {
      for (let f = pool.length - 1; f >= 0; f--) {
      let b = Math.floor(Math.random() * f)
      let temp = pool[f];
      pool[f] = pool[b];
      pool[b] = temp;
    }
  return pool;
  };

  for (let c = 0; c < 10; c++) {
    sattoloShuffle[0].push(lettersInHand);
  }
  return lettersInHand
};

// Start of Wave 2 Psuedocode

function usesAvailableLetters(input, lettersInHand) {

  //Create a copy of lettersInHand
  let tempHand = [...lettersInHand];

  //Create an array of characters from input
  let inputArray = inputArray.from(input);

  if (input.length > 10 || input.length < 1) {
    return false;
  }

  //Iterate through inputArray to check if [i] is in hand
  for (const letter of inputArray) {
    if (!tempHand.includes(letter)) {
      return false;
    } else {
      tempHand.delete(letter);
    }
  }
  return true;
}



// Do not remove this line or your tests will break!
export default Adagrams;