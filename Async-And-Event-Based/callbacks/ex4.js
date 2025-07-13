function filterArray(array, testCallback) {
    // Your code here
    console.log(testCallback(array));
}

const even= (arr)=>{
    return arr.filter((n)=>n%2==0);
}
const gFive=(arr)=>{
    return arr.filter((n)=>n>5);
}


// Example 
const array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output with even number test: [2, 4, 6, 8, 10]
// Expected output with numbers greater than 5: [6, 7, 8, 9, 10]
// 

filterArray(array, even);