const Adagrams = {
  drawLetters() {
    const letterValues = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1,
    };
    //make an array containing all available letters 
    let sample = Object.entries(letterValues).map(function ([key , value]){
      return key.repeat(value).split('');
    })

    sample = sample.flat()

    const lettersAtHand = []

    for (let i = 0; i < 10; i++){
      lettersAtHand.push(sample[Math.floor(Math.random()* sample.length)]);
    };
    return lettersAtHand  
  },

  usesAvailableLetters (input, lettersInHand){
    const inputLetters = Array.from(input);

    //make an object that hold all the letters in the lettersInHand and how many times they appear
    const lettersAppear = {}

    lettersInHand.forEach(letter => {
      if (letter in lettersAppear) {
        lettersAppear[letter] += 1;
      }
      else {
        lettersAppear[letter] = 1;
      }
    });

    console.log(lettersAppear)

    //make another loop that will go through the object and decrement if it exists 
    for (let i in inputLetters ){

      let letter = inputLetters[i]

      if ((lettersAppear[letter] !== undefined) && (lettersAppear[letter] > 0 )) {
        lettersAppear[letter] -= 1;
        console.log(letter)
      } else{
        console.log(letter)

        return false; 
      }
    };
    return true; 
  },

  scoreWord (word) {

  const lettersInWord = Array.from(word.toUpperCase())
   let score = 0
    for (let i = 0; i < lettersInWord.length; i++){
      if ('AEIOULNRST'.includes(lettersInWord[i])){
        score += 1;
      }
      if ('DG'.includes(lettersInWord[i])){
        score += 2;
      }
      if ('BCMP'.includes(lettersInWord[i])){
        score += 3;
      }
      if ('FHVWY'.includes(lettersInWord[i])){
        score += 4;
      }
      if ('K'.includes(lettersInWord[i])){
        score += 5;
      }
      if ('JX'.includes(lettersInWord[i])){
        score += 8;
      }
      if ('QZ'.includes(lettersInWord[i])){
        score += 10;
      }
    };
    if (lettersInWord.length >= 7 && lettersInWord.length <= 10){
      score += 8;
    };
    return score 

  },



};

// Adagrams.usesAvailableLetters('hello', ['h', 'l', 'l', 'o', 'i'])


// Do not remove this line or your tests will break!
export default Adagrams;
