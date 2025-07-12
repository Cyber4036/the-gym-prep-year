function formatName(firstName, lastName, callback) {
    // Your code here
    return callback(firstName, lastName)
}

function space(a,b){
    return `${a} ${b}`
}

function comma(a,b){
    return `${b.toUpperCase()}, ${a}`;
}

function point(a,b){
    return `${a.charAt(0)}. ${b}`;
}


// Example usage:
console.log(formatName("John", "Doe", comma));

// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"