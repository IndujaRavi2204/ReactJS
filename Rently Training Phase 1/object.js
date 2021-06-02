//A JavaScript object is a collection of named values

// object creation using literals
var employee = {firstname:"Induja",
                lastname:"Ravi",
                id:"EMP037",
                fullname:function(){  // object methods
                    return this.firstname +" "+ this.lastname;
                }
};
console.log(employee);  // displaying by object name
var name = employee.fullname();
console.log("Full name : "+name);
// object creation using new keyword
var employee = new Object();
employee.firstname = "Induja";
employee.lastname = "R";
employee.id = "EMP037";

// Objects are mutable - They are addressed by reference, not by value
var x = employee;
x.lastname = "Ravi";
console.log(employee.lastname);
console.log(employee);

// javascript for loops to iterate through properties of object
var y="";
for (i in employee){ 
    y+=employee[i];
    y+=" ";
}
console.log(y);
// adding properties
employee.dob = "22/04/2000";
console.log(employee);
// deleting properties
delete employee.id;
var val = Object.values(employee);   // displaying Object.values().. the values will be stored in an array
console.log(val);

// Using JSON.stringify()
var ans = JSON.stringify(employee); 
console.log(ans);
//JSON.stringify will not stringify functions
//This can be "fixed" if you convert the functions into strings before stringifying.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var student = new Person("Aruna","Priya","10","grey");
var friend = new Person("Ramya","Arjun","20","brown");
console.log(student);

//Using the prototype Property
Person.prototype.id = "037";
console.log(friend.id);
Person.prototype.fullname = function(){
        return this.firstName +" "+this.lastName;
}
console.log(friend.fullname());