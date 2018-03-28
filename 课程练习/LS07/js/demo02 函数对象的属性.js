//属性1：length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }
}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.

//属性2：arguments 实参个数
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象
    //(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //arguments 是Symbol类型，独一无二的，具体参见后续ES6部分
    console.log(arguments === foo.arguments);
    //false
    console.log(arguments.length);
    //4
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
    //(4) [1, 2, 3, 4]
};
foo(1,2,3,4);

//属性3：caller 获取调用当前函数的函数
//例一：
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);
test();//output: test is called from ,call from the top level
function testOuter() {
    test();
}
testOuter();//call from the function testOuter
//例二：
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();

//属性4：callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));

//属性5：prototype
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

console.log(Object.__proto__ == Function.prototype);
//true
var arr = [];
console.log(arr.__proto__ == Array.prototype);
//true
console.log(Function.__proto__ == Function.prototype);
//true
console.log(Function.__proto__ == Object.prototype);
//false