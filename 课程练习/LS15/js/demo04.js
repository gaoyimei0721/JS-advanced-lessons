function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function(){
    console.log(this.name,this.age);
}
var p = new Person("Mike",20);
p.sayHi();
// Mike 20

p.__proto === Person.prototype; 
//true
Person.__proto__ === Object.prototype;
 //false
Person.__proto__ === Function.prototype;
 //true
Person.__proto__.__proto__ === Object.prototype;
 //true

 