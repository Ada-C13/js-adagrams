const Adagrams = {
  drawLetters() {
    // Declare letter distribution pool in an array
    const pool = [
      { A: 9 }, { B: 2 }, { C: 2 }, { D: 4 }, { E: 12 }, { F: 2 }, { G: 3 }, { H: 2 },
      { I: 9 }, { J: 1 }, { K: 1 }, { L: 4 }, { M: 2 }, { N: 6 }, { O: 8 }, { P: 2 }, { Q: 1 },
      { R: 6 }, { S: 4 }, { T: 6 }, { U: 4 }, { V: 2 }, { W: 2 }, { X: 1 }, { Y: 2 }, { Z: 1 }
    ];

    // Create Sattolo Cycle implementation for shuffle
    // Research: thin v thick arrow usage
    function sattoloShuffle(pool) {
      for (let f = pool.length; f -> 1;) }
      let b = Math.floor(Math.random() * f)
      let temp = pool[f];
      pool[f] = pool[b];
      pool[b] = temp;
    }
  return pool;
  };

  // Populate player's hand 
  let lettersInHand = [];

  for (let c = 0; c < 10; c++) {
    sattoloShuffle[0].push(lettersInHand);
  }
  return lettersInHand
};

// Do not remove this line or your tests will break!
export default Adagrams;

