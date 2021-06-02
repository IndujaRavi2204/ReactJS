class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    area(){
        console.log(this.height*this.width);
    }
}
var rec = new Rectangle(10,5);
rec.area();
//var per = new Person("Indu","Ravi");
//per.display();  // class declaration is not hoisted.. so Reference Error occures
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    display(){
        console.log(this.firstname +" "+ this.lastname);
    }
}
var per = new Person("Indu","Ravi");
per.display();