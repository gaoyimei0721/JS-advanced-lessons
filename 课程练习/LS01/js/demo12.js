// Part1  隐式类型转换
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b); //boolean false
console.log(typeof (a==b),a==b); //boolean false
console.log(typeof (a<b),a<b); //boolean true

//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d); //img3.jpg 18

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g); // false true true

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h); //h: {x: 1}
}


// Part2222222 显式类型转换
Boolean();
Number();
String();
Object();

console.log(123.456.toFixed(1)); //123.5
console.log(123.456.toString()); //123.456
console.log(123.456.toFixed()); //123
console.log(123.456.toPrecision()); //123.456
console.log(123.456.toExponential()); //1.23456e+2

//parseInt();
//parseFloat();

toString();
