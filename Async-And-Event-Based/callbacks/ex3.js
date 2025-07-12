function calculate(num1, num2, operationCallback) {
    // Your code here
    console.log(operationCallback(num1,num2))
}

const add=(a,b)=>{
    return a+b;
}
const mult=(a,b)=>{
    return a*b;
}

const div=(a,b)=>{
    return a/b;
}

calculate(10,5,mult)


// Expected outputs:
// Addition callback: 15 (for 10, 5)
// Multiplication callback: 50 (for 10, 5)
// Division callback: 2 (for 10, 5)