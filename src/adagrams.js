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
        // function addNums(num1, num2) {
        //     return num1 + num2;
        // }
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
};

// Do not remove this line or your tests will break!
export default Adagrams;