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
    console.log(randomTenArray);

    // loop Array to assign alphabet
    const lettersForUser = [];
    for(const num of randomTenArray){
      lettersForUser.push(poolLetters[num]);
    }

    return lettersForUser;
  },


};


// Do not remove this line or your tests will break!
export default Adagrams;
