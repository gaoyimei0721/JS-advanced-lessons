//场景一：
//一般函数中的JS（非严格松散模式下）指代全局对象

function thisTest(){
    console.log(this === window);
}
thisTest();
//true

//可以通过this在函数内添加、删除、修改全局对象属性

var a=10,b="Hi";
function thisText(){
    this.a = 20;
    delete this.b;
    this.c = "添加的全局变量";
}
thisTest();
console.log(a,c);
// 20 "添加的全局变量"


//场景二：
//对象方法中的this（无函数嵌套的情况下）

var point = {
    X : 0,
    y : 0,
    moveTo : function(x,y){
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1) //this绑定到当前对象，即point对象
console.log(point);
//Object {x: 1, y: 1}


//场景三：
//构造函数中的this
 
function Person(age){
    this.age = age;
}
var p = new Person(20);
p.age;
//20

var Person = function(name,age){
    this.name = name;
    this.age = age;
    this.showMe = function(){
        console.log(this.name,this.age);
    }
} 
var p1 = new Person("Jack",20);
var p2 = new Person("Amy",18);
p1.showMe();
p2.showMe();
//"Jack" 20
//"Amy" 18

/*
var Person = function(name,age){
    this.name = name;
    this.age = age;
    showMe = function(){
        console.log(this.name,this.age);
    }
} 
var p1 = new Person("Jack",20);
p1.showMe(); //Error
showMe();    //"Jack" 20
*/
/*
var Person = function(name,age){
    var namePrivate = name;
    var agePrivate = age;
    this.showMe = function(){
        console.log(namePrivate,agePrivate);
    }
} 
var p1 = new Person("Jack",20);
p1.showMe(); //"Jack" 20
*/


//场景四：
//间接调用中的this（call、appy）

objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun = test;
objA.fun();          //AA 1
objA.fun.call(objB);  //BB 5