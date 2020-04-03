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
      gamePool[i] = letterPool[Math.floor(Math.random()*letterPool.length)];
      }
      return gamePool;
      console.log(gamePool);
    },
};

console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
