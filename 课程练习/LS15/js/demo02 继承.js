var a = {};
a.__proto__ === Object.prototype; //true

var b = new Object();
b.__proto__ === Object.prototype; //true
b.__proto__.__proto__ === Object.prototype.__proto__;


var div = document.createElement('div');
div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === Object.prototype; //true

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况
newObj.age = 23;

console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null