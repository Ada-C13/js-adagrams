const Adagrams = {
  
  drawLetters() {
    // Implement this method for wave 1
    // Create hash of letterInfo with counts
    // https://stackoverflow.com/questions/6298169/how-to-create-a-hash-or-dictionary-object-in-javascript  
    const letterInfo = {
      'A' : 9,
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
    // let = scope
    let deck = [];    
    //https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    //used ecmas2017 version of loop- ok per Devin
    for (const [key, value] of Object.entries(letterInfo)) {
      //console.log(key, value);
      //https://www.w3schools.com/js/js_loop_for.asp
      for (let i = 0; i < value; i++) {
        deck.push(key);
      }
      
    }
    //console.log(deck.length)

    // randomly pick 10 from deck
    let drawn = [];
    
    // create 10 times loop
    for (let i = 0; i < 10; i++) {
      //https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
      // get a random index from 0 to the length of deck
      let index = Math.floor(Math.random() * deck.length);
      // push the letter at the random index
      drawn.push(deck[index])
      // remove the letter from deck array
      deck.splice(index, 1);
    }
    return drawn
  },

  //--------------------------
  // example: input = "doo"
  // lettersinhand = a,b,y,d,o,g

  usesAvailableLetters(input, lettersInHand) {
    // parse string input to get array of letters
    let letters = input.split('');
    console.log(letters);
    // loop through array of letters
    // https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      // check if letter is included in lettersinHand 
      if (lettersInHand.includes(letter)) {
        //remove letter from lettersinHand
        var index = lettersInHand.indexOf(letter);
        if (index !== -1) lettersInHand.splice(index, 1);
      } else {
        // if not included, return false
        return false;
      } 
    }

    // for (index in letters) {
    //   console.log(letters[index])
    // }

    // letters.forEach(letter => {
       //   console.log(letter)
    // });
    //return true when gone through all letters
    return true;
  },





}; //const Adagrams


// Do not remove this line or your tests will break!
 export default Adagrams;

// test code
// const drawn = Adagrams.drawLetters();
// console.log(drawn)

// console.log(Adagrams.usesAvailableLetters("blah", ["a","n","y"]))