const Adagrams = {
  // Implement this method for wave 1
  createletterPool() {
    const letter = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const quantity = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    
    let letterPool = [];

    for (let i = 0; i < 26 ; i++){
      let j = 0;
      while (j < quantity[i]){
      letterPool.push(letter[i]);
      j++;
      };
      return letterPool;
    };
  },

  drawLetters() {
    let letterPool = this.createletterPool();
    //randomly draw 10 letters from the shuffledLetterPoll
    let drawn = [];
    for (let i = 0; i <10; i++){
      drawn.push(letterPool[Math.floor(Math.random()*letterPool.length)]);
    };
    return drawn;
  },

  
};













// Do not remove this line or your tests will break!
export default Adagrams;
