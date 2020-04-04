const Adagrams = {
  // Implement this method for wave 1
  createLetterPool() {
    const letter = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const quantity = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    
    let letterPool = [];

    for (let i = 0; i < 26 ; i++){
      let j = 0;
      while (j < quantity[i]){
        letterPool.push(letter[i]);
        j++;
      };
    };
    return letterPool;
  },

  drawLetters() {
    let letterPool = this.createLetterPool();
    
    //randomly draw 10 letters from the shuffledLetterPoll
    let drawn = [];
    for (let i = 0; i <10; i++){
      let index = Math.floor(Math.random()*letterPool.length); //get the index
      drawn.push(letterPool[index]);
      //remove that index from that the letterPool 
      letterPool.splice(index, 1);
    };
    return drawn;
  },

  usesAvailableLetters(input, lettersInHand){
    let inputLetters = input.toUpperCase().split("");
    //make a copy of the drawn letter 
    let dupInputLetters = inputLetters.slice();

    //1.empty array called timesTrue = []
    let timesTrue = [];
    
    // 2.Loop through each element of inputLetters and check to see if it exists in letterInHand
    dupInputLetters.forEach(element => {
      if (lettersInHand.includes(element) === true){
        timesTrue.push(true)
        //delete that letter from inputLetters to prevent the extra counts of letter
        let indexOfElement = lettersInHand.indexOf(element); //return the first index at which a given element can be found
        lettersInHand.splice(indexOfElement,1)
      }else{
        timesTrue.push(false);
      }
    });

    //find to see if there is any false in the timesTure array
    let isValid = undefined;
    if (timesTrue.includes(false) === true){
      isValid = false;
    }else{
      isValid = true;
    };
    return isValid;
  },
      

    
   
      

  
};













// Do not remove this line or your tests will break!
export default Adagrams;
