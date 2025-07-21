filterEvens([1, 2, 3, 4, 5, 6]);
// [2, 4, 6]
filterEvens([7, 9, 11]);
// []

function filterEvens(arr) {
    console.log(arr.map(num => num % 2 === 0?num:null).filter(num=> num!==null));
}