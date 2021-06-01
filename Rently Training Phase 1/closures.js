// closures - self invoking functions
// A closure is a function having access to the parent scope, even after the parent function has closed.
var fun=(function () {
    var count = 0;
    return function () {count+=1; return count}
  })();
  
  console.log(fun());
  console.log(fun());
  console.log(fun());