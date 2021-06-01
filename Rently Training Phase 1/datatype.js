//Numbers
var n=22; 
console.log(typeof(n));
var decimal=22.4;
var exponential=224e5;
var e=224e-5;
console.log(decimal,exponential,e);
//Strings
var s="String";
console.log(typeof(s));
var x="String"+1+2+3;
console.log(x);
var y=1+2+3+"String";
console.log(y);

var z=1;
var a=1;
console.log(a==z);  //boolean
//Array
var array=[1,2,3,4,5]
console.log(array[0],array[4]);
console.log(array)

//Object
var o={name:"Value",firstname:"Induja",lastname:"Ravi"};
console.log(typeof(o),o.firstname);
//Undefined
var u;
console.log(typeof(u)); // type of undefined variables is undefined
var a=null; // the type of null is an object
console.log(typeof(a));
console.log(u==a); // checks only the values.. so returns true since both null and undefined has no value
console.log(u===a); //checks both value and type... so returns false since u is of type undefined and a is of type null