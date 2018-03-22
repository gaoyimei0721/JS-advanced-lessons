//函数调用

//方法一：普通函数直接调用
function test1(){
    console.log("this is",this);
}
test1();
//this is window

//方法二：给obj动态添加方法
var x = 45;
var test = function(){
    console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test(); //23 调用主体是obj
test();     //45 调用主体是window

//方法三:对象+嵌套
var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        } 
        foo();
    } 
};
obj.test(); //45 window

//方法三：call()和apply()间接调用
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();          //AA
objA.foo.call(objB); //BB
objA.foo.apply(objB);//BB
//间接调用：移花接木、吸星大法
var fish = {
    name:"fish",
    swim:function(m,n){
        console.log("I'm:" + this.name + "I can swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("I'm:" + this.name + "I can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.apply(me,[7,8]);
//swim(1,2);与swim.call(null,1,2);相同

//方法四：构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack