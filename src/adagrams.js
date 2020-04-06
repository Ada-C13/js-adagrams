const Adagrams = {
  


  drawLetters() {
    // Implement this method for wave 1
    // Create hash of letterInfo with counts
    // https://stackoverflow.com/questions/6298169/how-to-create-a-hash-or-dictionary-object-in-javascript  
    letterInfo = {
      'A' : {
        count: 9,
        score: 1
      },
      'N' : 6,
      'B' : 2,
      'O' : 8,
      'C' : 2,
      'P' : 2,
      'D' : 4,
      'Q' : 1,
      'E' : 12,
      'R' : 6,
      'F' : 2,
      'S' : 4,
      'G' : 3,
      'T' : 6,
      'H' : 2,
      'U' : 4,
      'I' : 9,
      'V' : 2,
      'J' : 1,
      'W' : 2,
      'K' : 1,
      'X' : 1,
      'L' : 4,
      'Y' : 2,
      'M' : 2,
      'Z' : 1
    };

    // Loop thru letterInfo and populate deck 
    let deck = [];    
    //https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    

    // randomly pick 10 from deck
    let drawn = []
    
    // create 10 times loop
    //https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
    // get a randomn index from 0 - length of deck
    // push the letter at the random index
    // remove the letter from deck
        
    return drawn
  },
};

// Do not remove this line or your tests will break!
//export default Adagrams;

// test code
const drawn = Adagrams.drawLetters();
console.log(drawn)