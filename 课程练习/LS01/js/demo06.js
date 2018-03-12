var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2)); // 23
console.log(parseFloat("23.456xy")); // 23.456

console.log(parseInt === window.parseInt); //true
console.log(parseFloat === window.parseFloat); //true

console.log(Math.ceil(a2));//24
console.log(Math.floor(a2));//23
console.log(Math.round(a2));//23 舍入为最接近数字
var b = 23.6;
console.log(Math.round(b));//24
a3 = 5e2; //指数形式
console.log(a3);//500

console.log(typeof Math);//object

//NaN
var x = Number("xis021");
console.log(x);//NaN
console.log(isNaN(x));//true
console.log(typeof NaN);// number

console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN
console.log(NaN === NaN);//false

//Infinity: 用于存放表示正无穷大的数值 与 -Infinity: 用于存放表示负无穷大的数值
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0