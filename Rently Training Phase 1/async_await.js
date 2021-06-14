const fun1 = () =>{
    return "This is function 1";
};
const fun2 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("resolved the function 2");
        }, 3000);
    })
}
const fun3 = () =>{
    return "This is function 3";
}
const call = async() =>{
    const funone = fun1();
    console.log(funone);
    const funtwo = await fun2();
    console.log(funtwo);
    const funthree = fun3();
    console.log(funthree);
};
call();