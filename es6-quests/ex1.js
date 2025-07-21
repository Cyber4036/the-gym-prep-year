findProperty({ name: "Alice", age: 25 }, "name");
// "Alice"
findProperty({ name: "Alice", age: 25 }, "city");
// "Property not found"

function findProperty(object, property){
    if (object.hasOwnProperty(property)){
        console.log(object[property]);
    } else {
        console.log("Property not found");
    
    }
}