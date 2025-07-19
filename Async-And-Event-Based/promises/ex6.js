function stringer(str){
    return new Promise((res, rej)=>{
        if (!str){
            rej(new Error(`NTABWO IBAHO, null or undefined!!`))
        }
        res(str.toUpperCase());
    })

}
let str='Ikaze Iwacu!!';

const data= stringer(str);
data.then(s=> console.log(s))
.catch(e=> console.error(e.message));