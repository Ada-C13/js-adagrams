const Adagrams = {
    drawLetters() {
        // Implement this method for wave 1
        let poolOfLetters = [];
        const distroOfLetters = {
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
            Z: 1,
        };

        for (const letter in distroOfLetters) {
            if (distroOfLetters != undefined) {
                const letterCount = distroOfLetters[letter];
                const arrayOfLetters = letter.repeat(letterCount).split("");
                poolOfLetters = poolOfLetters.concat(arrayOfLetters);
            }
        }

        function poolOfLettersShuffle() {
            let newPosition, temp;
            for (let i = poolOfLetters.length - 1; i > 0; i--) {
                newPosition = Math.floor(Math.random() * (i + 1));
                temp = poolOfLetters[i];
                poolOfLetters[i] = poolOfLetters[newPosition];
                poolOfLetters[newPosition] = temp;
            }
            return poolOfLetters;
        }

        const shuffledLettersArray = poolOfLettersShuffle();
        // console.log(shuffledLettersArray);

        return shuffledLettersArray.slice(0, 10);
    },

    usesAvailableLetters(input, lettersInHand) {
        let arr = input.toUpperCase().split("");
        let copy = lettersInHand.slice(0);
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i];
            let index = copy.indexOf(letter);
            // console.log(letter);
            let checker = copy.includes(letter);
            copy.splice(index, 1);
            // console.log(checker);
            if (checker === false) return false;
        }
        return true;
    },

    scoreWord(word) {
        let letterValues = {
            A: 1,
            B: 3,
            C: 3,
            D: 2,
            E: 1,
            F: 4,
            G: 2,
            H: 4,
            I: 1,
            J: 8,
            K: 5,
            L: 1,
            M: 3,
            N: 1,
            O: 1,
            P: 3,
            Q: 10,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 4,
            W: 4,
            X: 8,
            Y: 4,
            Z: 10,
        };
        let total = 0;
        if (word.length >= 7) {
            total += 8;
        }
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            total += letterValues[letter.toUpperCase()];
        }

        return total;
    },

    highestScoreFrom(words) {
        let maxScore = 0;
        let maxWord = "";
        for (let word of words) {
            let wordArray = word.split("");
            let currentScore = this.scoreWord(word);
            if (currentScore > maxScore) {
                maxScore = currentScore;
                maxWord = word;
            } else if (wordArray.length === 10) {
                maxScore = currentScore;
                maxWord = word;
            }
        }
        return {
            word: maxWord,
            score: maxScore,
        };
    },
};

export default Adagrams;