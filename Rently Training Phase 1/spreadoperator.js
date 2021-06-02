// spread operator consists of three dots (...)
// It allows an iterable to expand in places where more than zero arguments are expected
let array1 = [1,2];
let array2 = [...array1,3,4,5] // used to concatenate two or more arrays using spread operator
console.log(array2);
console.log(array1);
let array4 = array1; // without using spread operator
array4.push(3,4); // without using spread operator
console.log(array4);
console.log(array1); // without using spread operator 
let array3 = [...array1]; //used to copy array
console.log(array3);
let str = ['A','B',...'CDE','F','G'];
console.log(str);