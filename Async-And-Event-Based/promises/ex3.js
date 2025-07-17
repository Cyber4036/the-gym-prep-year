fetch ('https://jsonplaceholder.typicode.com/todos')
.then(res=>{
    if (!res.ok){ throw new Error('Gura Net, bro')}
    return res.json();
})
.then(data=>console.log(data))
.catch(e=> console.error(e.message))

console.log('Starting...');