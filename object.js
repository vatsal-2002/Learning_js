const mysymb = Symbol("key1")
const obj = {
    name: "vatsal",
    [mysymb]: "symbol",
    age: 20,
    Email: "vatsal20prajapati@gmail.com",
    location: "Ahmedaabad"
} 

console.log(obj["name"])
console.log(obj[mysymb])

obj.name= "het";
// Freeze is used to lock the attributes.
Object.freeze(obj);
obj.name="sanket";
console.log(obj);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Asign :-  returns the modified target object.
const returnedResult = Object.assign(target, source);
console.log(target);
console.log(returnedResult === target);

console.log(Object.keys(obj)); //Returns the names of methods of an object.
console.log(Object.values(obj)); //Returns an array of values
console.log(Object.entries(obj)); //Returns an array of key/values
console.log(obj.hasOwnProperty('name'));  //Used to Determines whether an object has a property with the specified name.


// object De-Structure

const company = {
    Name: "sales",
    StartDate: 2015,
    About: "Product"
}

const {About: Detail} = company
console.log(Detail);