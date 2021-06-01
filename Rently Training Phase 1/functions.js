// functions and scope of variables
function demo1(){
    console.log("This is demo1 function");
}
demo1();
var c=4; // global variable
function demo(){
    var a=22;
    var b=14; // local variables
    d=10; //assign a value to a variable that has not been declared it will automatically become a GLOBAL variable
    return a+b+c;
}
console.log(demo());
console.log(d); 
//console.log(a);  error bcoz of accessing local variable
console.log(c); //global variable
function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
var fact=factorial(5);
console.log(fact);
console.log("Factorial of 10 is "+factorial(10));
console.log(factorial); // with () operator will return the function object instead of the function result