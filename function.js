function addTwoNumber(number1, number2){
    const Result = number1+number2
    return Result;
}

const Result = addTwoNumber(3,5)
console.log("Result:", Result)

function message (userName){
    return `${userName} just Logged In`
}

console.log(message("vatsal"));

// Function With  array

function calculateCartPrice (v1,v2,...number){
    return number
}

console.log(calculateCartPrice(20,30,40,100,200));

const newArray = [100,200,300,400];

function returnSecondValue(getArray){
    return getArray[1];
};

console.log(returnSecondValue(newArray))

// Function With Object

const user = {
    userName: "vatsal",
    price: 20
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is  ${anyobject.price}`);
}

handleObject(user);