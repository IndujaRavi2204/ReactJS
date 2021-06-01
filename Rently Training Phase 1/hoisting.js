// hoisting - automatically moves all declarations to top that is a variable can be used before it has been declared
num=50;  // initialization
console.log(num); // usage before declaration
var num; // declaration

//num1=1 // Using a let variable before it is declared will result in a ReferenceError
//console.log(num1); 
let num1;
num1 =1 
console.log(num1); // this works fine

//Using a const variable before it is declared, is a syntax error
const num2=2;
//num2=2;
console.log(num2);

console.log(num1+num3); //num 3 is undefined bcoz initializations are not hoisted
var num3=3;
var ans=multiply(num1,num2);  // function hoisting
console.log(ans);
console.log(n3);
function multiply(n1,n2){
    n3=10; // automactic global variable 
    return n1*n2*n3;
}
