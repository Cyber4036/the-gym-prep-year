async function firstProm(...args) {
    try {const res= await Promise.race(args);
    console.log(res);}
    catch (error){
        console.error(error.message);
    }

}

const promise3 = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('First rejected!')), 500));
const promise4 = new Promise((resolve) => 
  setTimeout(() => resolve('Second resolved!'), 1000));
const promise1 = new Promise((resolve) => 
  setTimeout(() => resolve('First resolved!'), 1000));
const promise2 = new Promise((resolve) => 
  setTimeout(() => resolve('Second resolved!'), 2000));

firstProm(promise1, promise2, promise3, promise4)