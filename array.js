const myarr =[0,1,2,3,4,5]
console.log(myarr[1]);

// console.log(myarr);

// /methods
myarr.push(6);
// Appends new elements to the end of an array, and returns the new length of the array.

myarr.pop();
// Removes the last element from an array and returns it.

myarr.unshift(-1);
// Inserts new elements at the start of an array

myarr.shift();
// Removes the first element from an array and returns it

console.log(myarr.includes(9));
// Determines whether an array includes a certain element

console.log(myarr.indexOf(1));
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const NewArr = myarr.join();
console.log(NewArr);
console.log(typeof NewArr);
// Adds all the elements of an array into a string

console.log("A", myarr);
const arr1 = myarr.slice(1,3);
console.log(arr1)
// returns a shallow copy of a portion of an array into a new array object selected from start to end.

console.log("B", myarr);
const arr2 = myarr.splice(1,3)
console.log(arr2);
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const heroes = ["saruhkh","salman","Rithik"]
const heroin = ["ketrina","kajal","karina"]

const all = heroes.concat(heroin);
console.log(all);
// This method returns a new array without modifying any existing arrays.

const all_new= [...heroes,...heroin]
console.log(all_new);
// This method spread all the element.

console.log(Array.isArray("Hitesh"));
//  method determines whether the passed value is an Array.

console.log(Array.from("Hitesh"));
// creates a new, shallow-copied Array instance from an iterable or array-like object.