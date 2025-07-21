mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
// { a: 1, b: 3, c: 4 }
mergeObjects({ x: "hello" }, { y: "world", x: "hi" });
// { x: "hi", y: "world" }

function mergeObjects(obj1, obj2){
    console.log({...obj1, ...obj2})
}


