// // Date : Date is an object in javascript. 
const myDate = new Date();
console.log(myDate) 

console.log(myDate.toString()) 
// // The toString() method returns a date object as a string.

console.log(myDate.toLocaleString())
// // Returns a String With Language Sensitive Representation of this Date in the local timezone.

console.log(myDate.toLocaleDateString())
// // returns a string with a language-sensitive representation of the date portion of this date in the local timezone.

console.log(myDate.toLocaleTimeString()) 
// // returns a string with a language-sensitive representation of the time portion of this date in the local timezone.

console.log(myDate.toDateString()) 
// // returns a string representing the date portion of this date interpreted in the local timezone.

console.log(myDate.toTimeString()) 
// string representing the time portion of this date interpreted in the local timezone.

console.log(typeof myDate.toISOString()) 
// string representing this date in the date time string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long

console.log( typeof myDate.toJSON()) 
// returns a string representing this date in the same ISO format as toISOString().
