//callback function which feeds the callback with two args namely (err, data)

function printer(data, callback){
    setTimeout(()=>{if (!data){
        callback(new Error('No Data provided!!'), null)
    }else {
        callback(null, data);
    }
    }, 2000);

}

//Promisify which turns a callback function into a promise
function promisify (fn){
    return function(...args){
        return new Promise((resolve, reject)=>{
            fn(...args, (err,data)=>{
                if (err) return reject(err);
                return resolve(data);
            })
        })
    }
}

const printerAsync= promisify(printer);

printerAsync('Hello Rwanda!!')
.then ((resolve)=>console.log(resolve)).catch((e)=> console.error(e.message))
console.log('Hi')