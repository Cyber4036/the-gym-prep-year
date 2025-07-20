async function fetcthUser(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await response.json();
    console.log('User Data fetched')
}
async function fetchPost(){
    // const resp= await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await resp.json();
    console.log('Posts fetched')
}
async function fetchComm(){
    // const resp= await fetch('https://jsonplaceholder.typicode.com/comments');
    // const data = await resp.json();
    console.log('Coments fetched')
}

async function seqExec(){
    try{await fetcthUser();
    await fetchPost();
    await fetchComm();}
    catch(err){
        console.log(err);
    }
}

seqExec();