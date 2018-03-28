//函数作为参数被传递（最常见的形式：回调函数）

//01.例1：
function add(x,y,f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);  //2的绝对值加-3的绝对值
add(2,3,Math.sqrt);  //2的开平方加3的开平方

//01.例2：
//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;    //x = 2,y = 3
//c = 2*a*a-3*(b-1);    //a = 5,b = 2
//k = 2*(i+1)-3(j-1);   //i = 7,j = 4
function foo(x,y,c1,c2){
    return 2*c1(x)-3*c2(y);
}
function f1(x){
    return x+1;
}
function f2(x){
    return x-1;
}
function f3(x){
    return x*x;
}
z = foo(2,3,f1,f3);
console.log(z);         //-21
c = foo(5,2,f3,f2);
console.log(c);         //47
k = foo(7,4,f1,f2);
console.log(k);         //7

//02.例一
var word_2 = "do another thing.";
var function_1 = function(callback){
    this.word_1 = "do somethig.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function2 = function(){console.log(this.word_2)};
function_1(function_2);
//do something.
//do another thing.


//数组相关的高阶函数 

//map 调用传入的函数来隐式的处理Array中的每一个元素
//01 简单的平方函数
function pow(x){
    return x * x;
}
var arr = [1,2,3,4,5,6,7,8,9];
arr.map(pow);
//[1, 4, 9, 16, 25, 36, 49, 64, 81]
//02 将数组所有元素改为数字类型
var result = ["1","2","3"].map(function(val){
    return parseInt(val);
});
console.log(result);
for(var i = 0; i < result.length; i++){
    console.log(typeof(result[i]));
}
// [1, 2, 3]
// number

//reduce  相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1,3,5,7,9];
arr.reduce(function f(x,y){
    return x * 10 + y;
});
//13579

//filter 数组过滤，返回为false的将被过滤掉
var arr = [1,2,4,5,6,9,10,15];
var r = arr.filter(function (x){
    return x % 2 !== 0;
});
r;
//[1,5,9,15]

//sort 数组排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
//[1, 2, 10, 20]
//01
var arr = [10, 5, 40, 25, 1000, 1];
arr.sort();
//[1, 10, 1000, 25, 40, 5]
//02 升序
var arr = [10, 5, 40, 25, 1000, 1];
arr.sort(function sortNumber(a,b){
    return a - b;
});
//[1, 5, 10, 25, 40, 1000]
//03 降序
var arr = [10, 5, 40, 25, 1000, 1];
arr.sort(function sortNumber(a,b){
    return b - a;
});
//[1000, 40, 25, 10, 5, 1]


//常用回调函数 设置超时和时间间隔的方法、异步请求、事件监听和处理

//超时回调
var timeOutId = setTimeout(function(){
    console.log("你已超时！");
},1000);
//假如这里有耗时的代码
//clearTimeout(timeOutId);

//间隔回调
var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);
//clearInterval(timeInterval);

//事件监听回调
document.addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
    console.log("click callback");
});



//函数作为返回值输出
var x = 12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function(){
    return function fun2(){
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
//  输出： ƒ fun2(){
//          return this.x;
//        }
console.log("输出：",obj.fun3()());
// 12
console.log("输出：",obj.fun4());
// 34

var y = 12;
var obj = {
    y:34,
    fun12:function(){
        console.log(this.y,this);
    }
};
var fun11 = function(){
    return function fun12(){
        return this;
    }
};
obj.fun13 = fun11;
obj.fun14 = fun11();
console.log("输出：",obj.fun13());
//  输出： ƒ fun12(){
//          return this;
//        }
console.log("输出：",obj.fun13()());
// 输出：
//  Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
console.log("输出：",obj.fun14());
// 输出： {y: 34, fun12: ƒ, fun13: ƒ, fun14: ƒ}
