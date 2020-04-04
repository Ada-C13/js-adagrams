const Adagrams = {
  drawLetters() {
    const letterPool = [
      'a','a','a','a','a','a','a','a','a','b','b','c','c','d','d','d','d',
      'e','e','e',"e",'e','e','e','e','e','e','e','e','f','f','g','g','g','h','h',
      'i','i','i','i','i','i','i','i','i','j','k','l','l','l','l','m','m',
      'n','n','n','n','n','n','o','o','o','o','o','o','o','o','p','p','q',
      'r','r','r','r','r','r','s','s','s','s','t','t','t','t','t','t','u',
      'u','u','v','v','w','w','x','y','y','z'  
      ];
      // let randomNumber = Math.floor(Math.random()*letterPool.length);
      let gamePool = [];
      for(let i= 0; i < 10 ; i++){
      gamePool[i] = letterPool[Math.floor(Math.random()*letterPool.length)].toUpperCase();
      }
      return gamePool;
      console.log(gamePool);
    },
    usesAvailableLetters(str,arr){
    let wordArr = str.split("");
    // console.log(wordArr);
    // console.log(arr);
    let count= 0;
    for (let i=0; i<wordArr.length; i++){
      arr.includes(wordArr[i])? arr.splice(arr.indexOf(wordArr[i]),1): count +=1 ;
    }
    // console.log(arr);
    if (arr.length + wordArr.length ===10 && count === 0){
    return true;
    } else {
    return false;
    }
  },
  scoreWord(str){
    let score = 0;
    let strup = str.toUpperCase();
    let wordArr = strup.split('');
    for (let i = 0; i< wordArr.length; i++){
      const letter = wordArr[i];
        if (["A","E","I","O","U","L","N","R","S","T"].includes(letter)){
          score += 1;
        }else if (["D","G"].includes(letter)){
          score += 2;
        }else if (["B","C","M","P"].includes(letter)){
          score += 3;
        }else if (["F","H","V","W","Y"].includes(letter)){
          score += 4;
        }else if (["K"].includes(letter)){
          score += 5;
        }else if (["J","X"].includes(letter)){
          score += 8;
        }else if (["Q","Z"].includes(letter)){
          score += 10;
        }
      }
      if (wordArr.length>=7){
      return score+8;
    }else {
      return score;
    }
  },
  highestScoreFrom(words){
    let scores = [];
    words.forEach(element => {
      scores.push(this.scoreWord(element.toUpperCase()));
    });
    let highestScore = Math.max(...scores);
    let highestScoreArr = [];
    scores.forEach(element => {
      highestScoreArr.push((element === highestScore)? element: undefined);
    });
    let arr = highestScoreArr.filter(score => score != undefined);
    if (arr.length === 1){
      return {
        word: words[highestScoreArr.indexOf(highestScore)],
        score: highestScore
       }
      }
      let winWordArr = [];
      for (let i=0; i<highestScoreArr.length; i++){
        if (highestScoreArr[i] != undefined){
            winWordArr.push(words[i]);
        }
      } 
      if ((Math.max(...(winWordArr.map(el => el.length)))) === 10){
        for (let i=0; i<winWordArr.length; i++){
          if (winWordArr[i].length === 10 ){
            return {
              word: winWordArr[i],
              score: highestScore
            }
          }
        }
      } else {
        let longest = 10;
        let winWord = '';
        for (let i = 0; i<winWordArr.length;i++){
          if (winWordArr[i].length < longest){
           longest = winWordArr[i].length;
           winWord = winWordArr[i];
          }
        }
        return {
          word: winWord,
          score: highestScore
        }
      }
    }
};

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
