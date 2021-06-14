let details1 = {
    firstname : "Induja",
    lastname : "Ravi",
}
let details2 = {
    firstname : "Ravi",
    lastname : "R",
}
let printdetails = function (place) {
    console.log(this.firstname+ " "+this.lastname+" from "+place);
}
printdetails.call(details1, "Ooty"); // function borrowing...
printdetails.apply(details2, ["Ooty"]);
let fun = printdetails.bind(details1, "Ooty");
fun();