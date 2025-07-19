const promise1= fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json(); // Convert response to JS object
    })
    .then(data => console.log(data)) // Log data (like abilities, sprites, types)
    .catch(err => console.error("API error:", err.message));

const promise2= new Promise((resolve, reject)=> {
    setTimeout(()=>{ resolve('Mwiriwe')},2000)

});

const promise3=Promise.resolve(400);

Promise.all([promise1,promise2,promise3])
.then (values=> console.log(values))
.catch(e=> console.error(e));

