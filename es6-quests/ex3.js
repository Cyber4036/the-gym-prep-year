countKeys({ name: "Alice", age: 25, city: "Paris" });
// 3
countKeys({});
// 0

function countKeys( obj){
    console.log(Object.keys(obj).length)
}
