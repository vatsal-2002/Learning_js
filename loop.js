// For loop
var x ;

for ( x = 0 ; x < 10 ; x++){
    console.log(x);        

} 
console.log("break")

// While Statement
let n = 0;
let m = 0;
while (n < 3) {
  n++;
  m += n;
  console.log(n)
}

// do-while statement
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

// for..in statement
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}