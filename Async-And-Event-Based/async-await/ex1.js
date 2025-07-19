function checkSt(status, data){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if (Object.hasOwn(data, status)){
                res(data[status]);
            } else
            {rej (new Error('Invalid status'))}
        }, 2000)
    })
}

const msg={
    'on': 'Mwiriwe',
    'off':'Catch you later'
}

async function fetchMsg() {
    console.log('Fetching...');
    try {const message=await checkSt('on', msg);
    console.log(message);}
    catch (err){
        console.error(err.message);
    }

}

fetchMsg();