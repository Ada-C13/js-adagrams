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
        const letterCount = distroOfLetters[letter]; // access the values of the object/hash
        const arrayOfLetters = letter.repeat(letterCount).split(""); //each letter is repeated until it reaches the letterCount
        // example: Letter A is repeated until it reaches the 9 or the 9th A
        poolOfLetters = poolOfLetters.concat(arrayOfLetters); // join all the array of letter to one big Array
    }
}

function poolOfLettersShuffle(poolOfLetters) {
    let newPosition, temp; // empty/undefied variables for place holders
    for (let i = poolOfLetters.length - 1; i > 0; i--) {
        // Math.random is a range 0 -1  * total of pool letter 92
        //Math.floor rounds down
        //Ex - Math.random(.05) * 92 = 4.6 <--- reps the new postion
        // however there is no 4.6 so floor rounds the number down to 4
        // this mean we exchange the number in the 4th position with the number in last positon
        newPosition = Math.floor(Math.random() * (i + 1));
        // temp position of i currently
        temp = poolOfLetters[i];
        // we take the new postion and swap with the odd
        poolOfLetters[i] = poolOfLetters[newPosition];
        //new position temp
        poolOfLetters[newPosition] = temp;
    }
    //we now returning a shuffle letter pool
    return poolOfLetters;
}

const shuffledLettersArray = poolOfLettersShuffle(poolOfLetters);
console.log(shuffledLettersArray);

function handOfletters() {
    // select the first 10 letters of shuffled array
    // to create a user hand
    return shuffledLettersArray.slice(0, 10);
}
const lettersInHand = handOfletters();
console.log(lettersInHand);

const lettersInHand = ["D", "O", "G", "X", "X", "X", "X", "X", "X", "X"];
const input = "GOOD";

function usesAvailableLetters(input, lettersInHand) {
    // converts string into array
    let arr = input.toUpperCase().split("");
    // creates a copy of letters in hand
    let copy = lettersInHand.slice(0);
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]; // loops thru every letter
        // finds the index of letter from input in the letters in hand array
        let index = copy.indexOf(letter);
        console.log(index);
        // checks the copy of letters in hand array
        let checker = copy.includes(letter);
        // the first letter it can't find it returns false
        copy.splice(index, 1);
        if (checker === false) return false;
    }
    return true;
}
console.log(usesAvailableLetters(input, lettersInHand));

function scoreWord(word) {
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
    let total = 0; // empty variable
    // when a word more than 7 letters
    if (word.length >= 7) {
        // add 8 points if word more than 7 letters
        total += 8;
    }
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        total += letterValues[letter.toUpperCase()];
    }

    return total;
}
// console.log(scoreWord(word));
const words = ["MMMM", "WWW"];

function sortWordsArray(words) {
    words.sort(function(a, b) {
        return a.length - b.length; //, For Descending order use: b - a
    });
    return words;
}

function highestScoreFrom(words) {
    let maxScore = 0;
    let maxWord = "";
    sortWordsArray(words);

    for (let word of words) {
        // converts each word into an array of its own
        let wordArray = word.split("");
        let currentScore = scoreWord(word); // scores word
        // if word is 10 letters long it is automatically winner
        // and returns results
        if (wordArray.length === 10) {
            maxScore = currentScore;
            maxWord = word;
            return {
                word: maxWord,
                score: maxScore,
            };
        }
        if (currentScore > maxScore) {
            maxScore = currentScore;
            maxWord = word;
        }
    }
    return {
        word: maxWord,
        score: maxScore,
    };
}
console.log(highestScoreFrom(words));

// ignore all of this below ///
//////////////////////////////////
// // // word: "AAAAAAAAAA",
// // //     score: Adagrams.scoreWord("AAAAAAAAAA"),
// // // };

// console.log(highestScoreFrom(words));
// function handOfletters() {
//     let shuffle = 1;
//     let hand = [];
//     while (shuffle < 10) {
//         hand.push(shuffledLettersArray.pop());
//         shuffle += 1;
//     }
//     return hand;
// }
// console.log(handOfletters());
// var n = 0;
// var x = 0;
// let arr = ["a", "b", "c"];
// while (n < 3) {
//     n++;

//     console.log($ { arr } + n);
// }

// Object.keys(poolOfLetters).forEach(function(item) {
//     letterStrings = item.repeat(poolOfLetters[item]);
//     // console.log(letterBank); // key
//     // console.log(poolOfLetters[item]); // value
//     const str = letterStrings; // string of letters
//     const arr = str.split(""); // may need a loop for value
//     const bank = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         const letterArray = [];
//         const letter = arr[i];
//         letterArray.push(letter);
//         // console.log(letterArray);
//         bank.push(letterArray);
//         // for (let i = 0;  < letterArray.length; i++) {
//         //     const bank = [];
//         //     const eachletterArray = letterArray[i];
//         //     bank.push(eachletterArray);
//         //     console.log(bank);
//         // }
//     }
//     console.log(bank);

// console.log(letterBank.join());
// const bank = [];
// letterStrip = letterBank.join();
// bank.push(letterStrip);
// console.log(bank);

// for (let i = 0; i < letterBank.length; i++) {
//     const letters = letterBank[i];
//     letterBank.push(distro);
// }
// console.log(distro);
// });

// let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men',
//     'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'
// ];

// let show = myShows[Math.floor(Math.random() * myShows.length)];

// console.log(show)

// letters = Object.keys(poolOfLetters)
// letterCount = Object.values(poolOfLetters)
// letterBank = Object.entries(poolOfLetters)

// console.log(letterCount)

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const newArr = Array.prototype.concat(...arr);
// // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// console.log(newArr)