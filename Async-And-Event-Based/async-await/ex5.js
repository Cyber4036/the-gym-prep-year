async function divider(a,b){
    if (b==0){
        throw new Error('Denominator is zero!!');
    } else {
        return a/b;
    }

}

async function handler(){
    try {
        const res= await divider(50,0);
        console.log(res)
    } catch (error) {
        console.error(error.message);
    
    }
} 

handler();