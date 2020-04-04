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
console.log(shuffledLettersArray);

function handOfletters() {
    let shuffle = 1;
    while (shuffle < 10) {
        console.log(shuffledLettersArray.pop());
        shuffle += 1;
    }
}
console.log(handOfletters());

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