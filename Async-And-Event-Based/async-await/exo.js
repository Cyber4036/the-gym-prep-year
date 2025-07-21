// setTimeout(() => console.log("Timeout 2"), 20);

// Promise.resolve().then(() => console.log("Promise"));

// setTimeout(() => console.log("Timeout"), 50);
// console.log("Hello");

async function asyncFunction() {

    const val  = await Promise.resolve("Text");
    console.log(val)


}

asyncFunction();