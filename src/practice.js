const poolOfLetters = {
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
    Z: 1
};
// // console.log(poolOfLetters);

Object.keys(poolOfLetters).forEach(function(item) {
    letterStrings = item.repeat(poolOfLetters[item])
        // console.log(letterBank); // key
        // console.log(poolOfLetters[item]); // value
    const str = letterStrings; // string of letters
    const arr = str.split(''); // may need a loop for value
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        const distro = arr[i]
        console.log(distro);
    }
});





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