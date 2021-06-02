function fun(){
    if(true){
        var funscope = "This variable exists in function scope";
        let letvar = "let variable exists only within this block";
        const constvar = "Const varaible exists only within this block";
        console.log(letvar);
        console.log(constvar);
    }
    console.log(funscope);
    //console.log(letvar);  // ReferenceError
    //console.log(constvar);  // ReferenceError
}
fun();

// lexical scope - children scope have the access to the variables defined in the parent scope
function fun1(){
    if(true){
        var funscope = "This variable exists in function scope";
        let letvar = "let variable exists only within this block";
        const constvar = "Const varaible exists only within this block";
        function fun2(){
            console.log(funscope);
            console.log(letvar);
            console.log(constvar);
        }
        fun2();
    }
}
fun1();
