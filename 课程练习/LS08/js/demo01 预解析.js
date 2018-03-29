console.log(a);  //undefined
var a = 2;
console.log(a); //2
//从解析角度看到的代码
var  a;
console.log(a);
a = 2;
console.log(a);

console.log(a,b); // undefined undefined
var b = 23;
console.log(a,b); // undefined 23
var a = b;
console.log(a,b); // 23 23

console.log(obj1,obj2); // undefined undefined 
var obj1 = {x:23};
console.log(obj1,obj2); // {x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2); // {x:23} {x:23} 
obj2.x = 25;
console.log(obj1,obj2); // {x:25} {x:25} 

//ES5中函数及变量声明重复的话，相当于覆盖
foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
//f_2
//等价于
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();

//同时有var和function关键字时（变量名同函数名）
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
// AA_1
// AA_2
//等价于
function AA(){
    console.log("AA_1");
}
var AA; //在最顶端和在这等效；//无效
AA();
AA = function AA(){
    console.log("AA_2");
};
AA();

