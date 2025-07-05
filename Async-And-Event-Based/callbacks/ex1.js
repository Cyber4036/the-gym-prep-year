function counter(callback) {
    // Your code here
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            callback(i);
        }, i*1000);
    }
}

function printer(number) {
    console.log(number);
}

counter (printer);


// Expected output (one number per second):
// 1
// 2
// 3
// 4
// 5