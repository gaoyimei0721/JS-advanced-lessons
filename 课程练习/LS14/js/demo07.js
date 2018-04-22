// 要求掌握下述方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var obj2 = Object.create({x:1});
obj2.y = 2;
Object.defineProperty(obj2,"z",{value:3});

Object.keys(obj2);
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));

for(var k in obj2){
    console.log(k,obj2[k]);
}
console.log("x" in obj2,"y in obj2");

var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));//是否包含可枚举属性的键？
console.log(Object.getOwnPropertyNames(o3));//是否包含可枚举属性的键？

console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("x"));

for(var k in o3){ //遍历不到x属性
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);// in 和 for...in 的区别 关于可枚举属性特性
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//是否关心可枚举