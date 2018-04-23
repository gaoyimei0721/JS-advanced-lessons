var obj1 = {
    num = 10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};

var obj2 = Object.create(obj);
obj2.age = 23;

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");   
};

var p1 = new Person("Mike",21);
p1.sayName();