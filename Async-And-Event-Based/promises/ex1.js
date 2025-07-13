const promise= new Promise((resolve, reject)=>{
    setTimeout(()=>{if (Math.random()<0.5){
            resolve("Success!")
        } else {reject('Failure!')}}
    , 1000);
});


promise.then((resolve)=>console.log(resolve), (err)=>console.error(err));

