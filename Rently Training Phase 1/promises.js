let promise = new Promise((resolve, reject) => {
    let a = 2;
    if(a == 2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})