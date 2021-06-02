// Arrow functions allow us to write shorter function syntax
// This works only if the function has only one statement
x = () => "Hello";
console.log(x());
y = (val) => "Hello" +" "+ val;
console.log(y("World"));
z = (n1,n2) => n1+n2;
console.log(z(10,20));