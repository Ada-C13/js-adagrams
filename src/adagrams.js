const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E","E", "E","E", "E" ,"E", "E","E", "E", "E", "E", 
    "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", 
    "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S",
    "T", "T", "T", "T",  "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

    let hand = new Array(10);
    //found the random function explaination on stack overflow 
    for (let i = 0; i < hand.length; i++){
      let rand = Math.floor(Math.random() * Math.floor(letters.length));
      letters.splice(rand, 1);
      hand.splice(i, 1, letters[rand]);
    }
    return hand; 
  },


  usesAvailableLetters(input, lettersInHand) {
    let availableLetters = lettersInHand.sort().join().toUpperCase();
    let userInput = input.split("").sort().join().toUpperCase();
    return availableLetters.includes(userInput);
  },


  scoreWord(word){
    let score = 0 
    let array = word.toUpperCase().split("")
      
    if (word.length >= 7 && word.length <=10){
      score += 8
    }

    for (let i = 0; i < array.length; i++){
      let letter = array[i];
      if((["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]).includes(letter)){
          score +=1
      }else if(["D", "G"].includes(letter)){
          score += 2
      }
      else if(["B", "C", "M", "P"].includes(letter)){
          score += 3
      }
      else if (["F", "H", "V", "W", "Y"].includes(letter)){
          score +=4
      }else if (["K"].includes(letter)){
          score += 5
      }else if(["J", "X"].includes(letter)){
          score += 8
      }else if(["Q", "Z"].includes(letter)){
          score += 10 
      }else 
          score += 0
      }
      return score
    },

    highestScoreFrom(words, score){
      scoreResults = {}
      //putting all words into an object 
      for(let i = 0; i < words.length; i++){
        scoreResults[words[i]] = this.scoreWord(words[i].toUpperCase());
      }

      let maxScore = 0;
      let maxWord = '';

      for (let key in scoreResults){
        if(scoreResults[key] > maxScore){
            maxScore = scoreResults[key];
            maxWord = key;
        }
      }
     
      let tiedHighestWords = {};

      for (let key in scoreResults){
        if(scoreResults[key] === maxScore && key !== maxWord){
            tiedHighestWords[key] = scoreResults[key];
        }
      }
      //adding max to tied highest scores
      tiedHighestWords[maxWord] = maxScore;
      let tiedCount = 0;
      for (let key in tiedHighestWords){
        tiedCount += 1;
        console.log("this is the key: " + key);
        console.log(tiedHighestWords[key]);
      }
      let winner = {};
      //working: if winner lenght == 1, there are no ties
      if(tiedCount == 1){
        winner.word = Object.keys(tiedHighestWords)[0];
        winner.score = Object.values(tiedHighestWords)[0];
        return winner;
      }
      
      const tieBreaker = Object.keys(tiedHighestWords);
      const tieWinner = tieBreaker[0];

    
      for(let i = 0; i < tieBreaker.length; i++){
        if(tieBreaker[i].length === 10){
          tieWinner = tieBreaker[i];
          winner.word = tieBreaker[i];
          winner.score = tiedHighestWords[tieBreaker[i]];
          return winner;
        }else if (tieBreaker[i].length < tieWinner.length){
          winner.word = tieBreaker[i];
          winner.score = tiedHighestWords[tieBreaker[i]];
        }

      }
      return winner;
    }
};

Adagrams.drawLetters();

Adagrams.highestScoreFrom(['h', 'hi', 'gc']);
//, 'kk', 'q', 'ggggg'
// Do not remove this line or your tests will break!
//export default Adagrams;
