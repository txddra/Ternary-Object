//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.

//'solution'
function sayHello(name){
return name.map(person => person.name !=='' ? `Hello ${person.name}` : `Hello stranger`)
}

//testing
console.log(sayHello(person))


//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'



function oldEnough(age){
return age > 15 ? `yes they can drive`
: age === 15 ?`can drive with parent`
: `cannot drive`;
};

console.log(oldEnough(17));
console.log(oldEnough(12));
console.log(oldEnough(15));

//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are left. so...if allowableSpeed is set to a number in that range your default output should be `<speed> is a decent speed`
// ---

// speedMessage = result of a ternary;
//if speed = 70 log -> '70 is the perfect speed'
function speedLogger(givenSpeed){

  let allowableSpeed = `${givenSpeed} is a decent speed`
return speedMessage = 
givenSpeed === 70 ? `70 is the perfect speed`
: givenSpeed >= 90 ? `Are you trying to get us killed`
: givenSpeed < 10 ? `You should not drive`
: givenSpeed <= 50 ? `Faster please`: allowableSpeed
};


console.log(speedLogger(5));
console.log(speedLogger(70));
console.log(speedLogger(68))
console.log(speedLogger(95));

// let allowableSpeed =

// function 
// let allowableSpeed
// :`${allowableSpeed} is a decent speed`

//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  
let sortIt = 
  arr.map((value) =>
  value > 50 ? arr1.push(Math.round(value))
    : value < 50 && typeof value === 'number'? arr2.push(Math.round(value * 100) / 100)
    : typeof value === "string"  ? arr3.push(value)
    :`word`
  );
;


// function sortIt(arr){
// arr.map((value) =>{
// value > 50 
// ? arr1.push(Math.round(value))
// : value < 50 ? arr2.push(value)
// :value === '' ? arr3.push(value): 'what'}
// )
// }




console.log(arr1);
console.log(arr2);
console.log(arr3);

// let answer = sortIt(arr)
//console.log(sortIt(arr))

  // if()
  
  
  
  
// Object Methods:
// 5.Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};
