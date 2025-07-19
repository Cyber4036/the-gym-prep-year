const add=(a,b)=>{ 
    return new Promise(resolve=> setTimeout(()=>resolve(a+b), 1000))

};
const multiply=(a)=>{ 
    return new Promise(resolve=> setTimeout(()=>resolve(a*2), 1000))

};
const subtract=(a)=>{ 
    return new Promise(resolve=> setTimeout(()=>resolve(a-5), 1000))

};

async function series(){
    try {
        const a=await add(30,10);
        const b=await multiply(a);
        const c=await subtract(b);
        console.log(c);
    } catch {
        console.error(err.message);
    
    }
}

series();