reverseString("hello");
// "olleh"
reverseString("Codewars");
// "srawedoC"

function reverseString(str) {
    console.log(str.split('').reverse().join(''));
}