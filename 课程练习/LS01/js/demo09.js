//对象类型 简述
var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype); //true
console.log(Object.prototype); 
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype); 
//[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, shift: ƒ, …]
console.log(arr.__proto__.__proto__ === Object.prototype);//true

function foo() { 
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype); //true
console.log(foo.__proto__.__proto__ === Object.prototype); //true

console.log(obj instanceof Object); //true
console.log(arr instanceof Object); //true
console.log(foo instanceof Object);
console.log(foo === window.foo);

//所有对象都有属性，如何查看对象的属性，ES5中查看属性相关的几种方法
for(var k in obj){//只能遍历整个原型链上可遍历的属性
    console.log(k,obj[k]);
}

console.log(Object.keys(obj));

console.log("x" in obj);//能够检查整个原型连上的属性，包括不可遍历的属性

//函数也是对象，也不例外，函数也有若干属性 
for(var k in foo){
    console.log(k,foo[k]);//没有自身属性，所以没有输出
}
console.log("call" in foo);//true
console.log("apply" in foo);//true
console.log("arguments" in foo);//true