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

  //Start of Wave 3 pseudocode 

  function scoreWord(word) {
    //Create scoring chart 
    const points = [
      { A: 1 }, { B: 3 }, { C: 3 }, { D: 2 }, { E: 1 }, { F: 4 }, { G: 2 }, { H: 4 },
      { I: 1 }, { J: 8 }, { K: 5 }, { L: 1 }, { M: 3 }, { N: 1 }, { O: 1 }, { P: 3 }, { Q: 10 },
      { R: 1}, { S: 1 }, { T: 1 }, { U: 1 }, { V: 4 }, { W: 4 }, { X: 8 }, { Y: 4 }, { Z: 10 }
    ];

    //Set scoring counter
    let score = 0 
    
    //Handle extra points for certain word lengths
    if (word.length > 6 && word.length < 11) {
      score +== 8;
    }

    // Create array of characters from word 
    let wordArray = wordArray.from(word);

    //Iterate through wordArray to sum points of a given word
    for (const item of wordArray) {
      if(!points.includes(item) {
        return false;
    } else if {
        score +== points(value);
      }
    }
    return score
  }

// Do not remove this line or your tests will break!
export default Adagrams;