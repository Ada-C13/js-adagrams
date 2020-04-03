const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const poolLetters = [];
    for(let i =0;i < 9;i++){
      poolLetters.push("A");
      poolLetters.push("I");
    }
    for(let i=0;i<2;i++){
      poolLetters.push("B");
      poolLetters.push("C");
      poolLetters.push("F");
      poolLetters.push("H");
      poolLetters.push("M");
      poolLetters.push("P");
      poolLetters.push("V");
      poolLetters.push("W");
      poolLetters.push("Y");
    }
    for(let i =0;i<4;i++){
      poolLetters.push("D");
      poolLetters.push("L");
      poolLetters.push("S");
      poolLetters.push("U");
    }
    for(let i=0;i<12;i++){
      poolLetters.push("E");
    }
    for(let i=0;i<3;i++){
      poolLetters.push("G");
    }
    for(let i=0;i<6;i++){
      poolLetters.push("N");
      poolLetters.push("R");
      poolLetters.push("T");
    }
    for(let i=0;i<8;i++){
      poolLetters.push("O");
    }
    poolLetters.push("J");
    poolLetters.push("K");
    poolLetters.push("Q");
    poolLetters.push("X");
    poolLetters.push("Z");
    
    //draw random from 0 to 97 on index num
    const getRandomTen = function(){
      const randomTen = [];
      for(let i=0;i<10;i++){
        let randomOne = Math.floor(Math.random() * Math.floor(98));
        while(randomTen.includes(randomOne)){
          randomOne = Math.floor(Math.random() * Math.floor(98))
        }
        randomTen.push(randomOne);
      }
      return randomTen;
    }
  
    const randomTenArray =  getRandomTen();

    // loop Array to assign alphabet
    const lettersForUser = [];
    for(const num of randomTenArray){
      lettersForUser.push(poolLetters[num]);
    }

    return lettersForUser;
  },
  usesAvailableLetters(input,lettersInHand){
    const inputUpper = input.toUpperCase();
    const inputArray = inputUpper.split('');

    const checkLetter = [];

    inputArray.forEach((letter)=>{
      const letterTrack = [];
      for(let i in lettersInHand){
        if(letter === lettersInHand[i]){
          letterTrack.push(i);
        }
      }
      if (letterTrack.length === 0){
        return false;
      }
      else {
        const toSplice = letterTrack[0];
        checkLetter.push(lettersInHand.splice(toSplice,1));
      }
    });
    return checkLetter.length === inputArray.length;
  },
  scoreWord(word){
    const wordArray = word.toUpperCase().split('');
    const score = {};
    // assign score rules
    ['A','E','I','O','U','L','N','R','S','T'].forEach((char)=>{
      score[char] = 1;
    });

    ['D','G'].forEach((char)=>{
      score[char] = 2;
    });

    ['B','C','M','P'].forEach((char)=>{
      score[char] = 3;
    });

    ['F','H','V','W','Y'].forEach((char)=>{
      score[char] = 4;
    });

    ['J','X'].forEach((char)=>{
      score[char] = 8;
    });

    ['Q','Z'].forEach((char)=>{
      score[char] = 10;
    });

    score['K'] = 5;
    let totalScore = 0;
    for(let eachWord of wordArray){
      for(let [key,value] of Object.entries(score)){
        if(eachWord === key){
          totalScore += value;
        }
      }
    }
    if(wordArray.length >= 7){
      totalScore +=8;
    }
    return totalScore;
  },

  highestScoreFrom(words){
    const winnersScore = [];
    words.forEach((wordInput)=>{
      let tempScore = this.scoreWord(wordInput);
      winnersScore.push({word:wordInput, score:tempScore, wordLength: wordInput.length});
    })
    let max = 0; 
    winnersScore.forEach((wordObj)=>{
      if(wordObj.score > max){
        max = wordObj.score;
      }
    })
    const maxArray = winnersScore.filter(obj => obj.score === max);
    if(maxArray.length === 1){
      const answer = maxArray[0];
      delete answer.wordLength;
      return answer;
    }
    else {

      const ArrayTenLength = maxArray.filter(obj => obj.wordLength === 10);

      if(ArrayTenLength.length >= 1){
        const answer = ArrayTenLength[0];
        delete answer.wordLength;
        return answer;
      }

      else {
        let min = 10;
        maxArray.forEach((wordObj)=>{
          if(wordObj.wordLength < min){
            min = wordObj.wordLength;
          }
        })
        const minArray = maxArray.filter(obj => obj.wordLength === min);
        const answer = minArray[0];
        delete answer.wordLength;
        return answer;
      }

    }
    

  },

};



// Do not remove this line or your tests will break!
export default Adagrams;
