// This Keyword
const test = {
    prop: 42,
    func: function () {
      return this.prop;
    },
  };
  
  console.log(test.func());

  function values(){
    console.log(this)
  }

  values();

// arrow function

// const addTwo = (num1,num2) => {
//   return num1+num2
// }

// Implicit method
const addTwo = (num1,num2) => num1+num2

console.log(addTwo(3,4))