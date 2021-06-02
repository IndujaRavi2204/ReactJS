// for/of loop
var array = "JavaScript".toUpperCase();
var i;
for(i of array){
    console.log(i);
}
// Symbol type - It represents a unique "hidden" identifier that no other code can accidentally access
var a = Symbol("1");
var b = Symbol("1");
console.log(a===b); // returns false coz its unique
const user = {
    firstname : "Indu",
    lastname :"Ravi",
}
const id = Symbol('id');
user[id] = 37;
console.log(user[id],user.id);
// rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function add(... args){
    var sum=0;
    var i;
    for(i of args){
        sum+=i;
    }
    return sum;
}
var ans = add(1,2,3,4,5);
console.log(ans);

// find() method returns the value of the first array element that passes a test function
var a = [4, 9, 16, 25, 29];
var first = a.find(myFunction);
var index = a.findIndex(myFunction) // returns the index of the first array element that passes a test function
function myFunction(value, i, a) {
  return value >10; // returns 1st value that is greater than 10
}
console.log(first, index);

//New Math methods
// 1. Math.trunc(x) returns the integer part of x
console.log(Math.trunc(22.9),Math.trunc(-14.04));
// 2. Math.sign(x) returns if x is negative, null or positive
console.log(Math.sign(-11),Math.sign(0),Math.sign(22));
// Math.cbrt(x) returns the cube root of x
console.log("Cube root of 8 is : "+Math.cbrt(8));
// Math.log2(x) returns the base 2 logarithm of x
console.log("Log base 2 of 2 is : "+Math.log2(2));
console.log("Log base 10 of 10 is : "+Math.log10(10));

// New number properties
var x = Number.EPSILON;
console.log(Number.isInteger(10));
var y = Number.MAX_SAFE_INTEGER;
console.log(Number.isSafeInteger(y));
var z = Number.MIN_SAFE_INTEGER;
console.log(x+" "+y+" "+z);
console.log(isFinite(100/0));
console.log(isFinite(100/10));
console.log(isNaN("Hi"), isNaN("1"));