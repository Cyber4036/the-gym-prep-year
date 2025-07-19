function negCheck(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{if (num<0){
            reject (new Error('Negative num, nah uh!!!'))
        }
        resolve(num);}, 2000)
    })

}

const promise= negCheck(403);
promise.then(number=> console.log(number))
.catch(e=> console.error(e.message));

console.log( 'Ikaze to Exercise 5!!!! ')