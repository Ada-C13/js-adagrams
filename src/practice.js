// // let poolOfLetters = [];
// // const distroOfLetters = {
// //     A: 9,
// //     B: 2,
// //     C: 2,
// //     D: 4,
// //     E: 12,
// //     F: 2,
// //     G: 3,
// //     H: 2,
// //     I: 9,
// //     J: 1,
// //     K: 1,
// //     L: 4,
// //     M: 2,
// //     M: 2,
// //     N: 6,
// //     O: 8,
// //     P: 2,
// //     Q: 1,
// //     R: 6,
// //     S: 4,
// //     T: 6,
// //     U: 4,
// //     V: 2,
// //     W: 2,
// //     X: 1,
// //     Y: 2,
// //     Z: 1,
// //     Z: 1,
// // };

// // for (const letter in distroOfLetters) {
// //     if (distroOfLetters != undefined) {
// //         const letterCount = distroOfLetters[letter];
// //         const arrayOfLetters = letter.repeat(letterCount).split("");
// //         poolOfLetters = poolOfLetters.concat(arrayOfLetters);
// //     }
// // }
// // // function addNums(num1, num2) {
// // //     return num1 + num2;
// // // }
// // function poolOfLettersShuffle() {
// //     let newPosition, temp;
// //     for (let i = poolOfLetters.length - 1; i > 0; i--) {
// //         newPosition = Math.floor(Math.random() * (i + 1));
// //         temp = poolOfLetters[i];
// //         poolOfLetters[i] = poolOfLetters[newPosition];
// //         poolOfLetters[newPosition] = temp;
// //     }
// //     return poolOfLetters;
// // }

// // const shuffledLettersArray = poolOfLettersShuffle();
// // console.log(shuffledLettersArray);

// // function handOfletters() {
// //     return shuffledLettersArray.slice(0, 10);
// // }

// // console.log(handOfletters());

// // for (let i = 0; i < letterBank.length; i++) {
// //     const letters = letterBank[i];
// //     letterBank.push(distro);
// // }

// let input = "GOOD";
// let lettersInHand = ["D", "O", "G", "X", "X", "X", "X", "X", "X", "X"];

// // def permutations?(string1, string2)
// //   # raise NotImplementedError, "permutations? not implemented"
// //   return false if string1.length != string2.length
// //   hash1 = count_chars(string1)
// //   hash2 = count_chars(string2)
// //   if hash1 == hash2
// //     return true
// //   end
// //   return false
// // end

// // def count_chars(string)
// //   hash = {}
// //   string_array = string.split("")
// //   string_array.each do |letter|
// //     if !hash[letter]
// //       hash[letter] = 1
// //     else
// //       hash[letter] += 1
// //     end
// //   end
// //   return hash
// // end
// // months.splice(4, 1,);
// // // replaces 1 element at index 4

// // console.log(beasts.indexOf('bison'));
// // // expected output: 1

// function usesAvailableLetters(input, lettersInHand) {
//     let arr = input.toUpperCase().split("");
//     let copy = lettersInHand.slice(0);
//     console.log(copy);
//     for (let i = 0; i < arr.length; i++) {
//         letter = arr[i];
//         index = copy.indexOf(letter);
//         console.log(letter);
//         let checker = copy.includes(letter);
//         copy.splice(index, 1);
//         // console.log(checker);
//         console.log(copy);
//         if (checker === false) return false;
//     }
//     return true;
// return results;

// if (results.includes(false)) return false;
// else {
//     return false;
// }
// }

// A, E, I, O, U, L, N, R, S, T    1
// D, G                           2
// B, C, M, P                    3
// F, H, V, W, Y                  4
// K                              5
// J, X                           8
// Q, Z                           10
// console.log(usesAvailableLetters(input, lettersInHand));
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
    S: 4,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
};

//   for (let i = 0; i < arr.length; i++) {
//         letter = arr[i];
//         index = copy.indexOf(letter);
//         console.log(letter);
//         let checker = copy.includes(letter);
//         copy.splice(index, 1);

let hand = ["G", "O", "O", "D"];

function scoreWord() {
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
}
console.log(scoreWord());
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