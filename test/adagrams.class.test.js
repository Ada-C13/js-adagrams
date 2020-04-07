import Adagrams from '../src/adagrams-class';

describe('AdagramsClass', () => {
  let adagrams;
  let drawn;
  let expectScores;
  let expectTie;
  let scores;
  let highScore;
  let tiedWords;

  describe('drawLetters', () => {
    beforeEach(() => {
      adagrams = new Adagrams;
      drawn = adagrams.drawLetters();

    });

    it('draws ten letters from the letter pool', () => {
      expect(drawn).toHaveLength(10);
    });

    it('returns an array, and each item is a single-letter string', () => {
      expect(Array.isArray(drawn)).toBe(true);
      drawn.forEach((l) => {
        expect(l).toMatch(/^[A-Z]$/);
      });
    });
  });

  describe('usesAvailableLetters', () => {
    beforeEach(() => {
      adagrams = new Adagrams;
    });


    it('returns true if the submitted letters are valid against the drawn letters', () => {
      const drawn = ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
      const word = 'DOG';

      const isValid = Adagrams.usesAvailableLetters(word, drawn);
      expect(isValid).toBe(true);
    });

    it('returns false when word contains letters not in the drawn letters', () => {
      const drawn = ['D', 'O', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
      const word = 'DOG';

      const isValid = Adagrams.usesAvailableLetters(word, drawn);
      expect(isValid).toBe(false);
    });

    it('returns false when word contains repeated letters more than in the drawn letters', () => {
      const drawn = ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
      const word = 'GOOD';

      const isValid = Adagrams.usesAvailableLetters(word, drawn);
      expect(isValid).toBe(false);
    });
  });

  describe('scoreWord', () => {
    beforeEach(() => {
      adagrams = new Adagrams;
    });

    expectScores = (wordScores) => {
      Object.entries(wordScores).forEach(([word, score]) => {
        expect(adagrams.scoreWord(word)).toBe(score);
      });
    };

    it('returns an accurate numerical score according to the score chart', () => {
      expectScores({
        A: 1,
        DOG: 5,
        WHIMSY: 17
      });
    });

    it('returns a score regardless of the input case', () => {
      expectScores({
        a: 1,
        dog: 5,
        wHiMsY: 17
      });
    });

    it('returns a score of 0 if given an empty input', () => {
      expectScores({
        '': 0
      });
    });

    it('adds an extra 8 points if word is 7 or more characters long', () => {
      expectScores({
        XXXXXXX: 64,
        XXXXXXXX: 72,
        XXXXXXXXX: 80,
        XXXXXXXXXX: 88,
      });
    });
  });

  describe('highestScoreFrom', () => {
    beforeEach(() => {
      adagrams = new Adagrams;
    });

    it('returns a hash that contains the word and score of best word in an array', () => {
      const words = ['X', 'XX', 'XXX', 'XXXX'];
      const correct = { word: 'XXXX', score: adagrams.scoreWord('XXXX') };

      expect(adagrams.highestScoreFrom(words)).toEqual(correct);
    });

    it('accurately finds best scoring word even if not sorted', () => {
      const words = ['XXX', 'XXXX', 'X', 'XX'];
      const correct = { word: 'XXXX', score: adagrams.scoreWord('XXXX') };

      expect(adagrams.highestScoreFrom(words)).toEqual(correct);
    });

    describe('in case of tied score', () => {
      expectTie = (words) => {
      scores = words.map(word => adagrams.scoreWord(word));
      highScore = scores.reduce((h, s) => h < s ? s : h, 0);
      tiedWords = scores.filter((s) => s == highScore);

        // Expect at least two tied words
        expect(tiedWords.length).toBeGreaterThan(1);
      };

      it('selects the word with 10 letters', () => {
        const words = ['AAAAAAAAAA', 'BBBBBB'];
        const correct = { word: 'AAAAAAAAAA', score: adagrams.scoreWord('AAAAAAAAAA') };
        expectTie(words);

        expect(adagrams.highestScoreFrom(words)).toEqual(correct);
        expect(adagrams.highestScoreFrom(words.reverse())).toEqual(correct);
      });

      it('selects the word with fewer letters when neither are 10 letters', () => {
        const words = ['MMMM', 'WWW'];
        const correct = { word: 'WWW', score: adagrams.scoreWord('WWW') };
        expectTie(words);

        expect(adagrams.highestScoreFrom(words)).toEqual(correct);
        expect(adagrams.highestScoreFrom(words.reverse())).toEqual(correct);
      });

      it('selects the first word when both have same length', () => {
        const words = ['AAAAAAAAAA', 'EEEEEEEEEE'];
        const first = { word: 'AAAAAAAAAA', score: adagrams.scoreWord('AAAAAAAAAA') };
        const second = { word: 'EEEEEEEEEE', score: adagrams.scoreWord('EEEEEEEEEE') };
        expectTie(words);

        expect(adagrams.highestScoreFrom(words)).toEqual(first);
        expect(adagrams.highestScoreFrom(words.reverse())).toEqual(second);
      });
    });
  });
});
