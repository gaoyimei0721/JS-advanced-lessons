//增删改查
var arr = [1,2,3];
delete arr[2]; 
//[1, 2, empty]
console.log(arr.length);
//3
arr.length = 2;
//[1, 2]
console.log(arr);

var i=2,b=[];
b[i] = 3;
//[empty, empty, 3]
b[i+1] = "YY";
//[empty, empty, 3, YY]
b[b[i]] = b[0]; //b[3] = b[0]
console.log(b);
//[empty × 2, 3, undefined]


//- 数组是对象的特殊形式，可以为数组添加对象属性，对于0至2的32次方之外的数，将作为普通对象的键来对待
//- 数组特别之处在于，当使用使用2的32次方以内的非负整数作为属性名时（包括类型转换的数字），
//数组会自动维护其length属性，作为数组的元素，而不是数组对象的属性
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);

var arr = [];
arr[-1.23] = "xx";
arr;
//[-1.23: "xx"]
var arr = [];
arr[1.23] = "yy";
arr;
//[1.23: "yy"]


function f(){
    console.log(arguments);
}
f(1,2,3,"Y");
// [1, 2, 3, "Y", callee: ƒ, Symbol(Symbol.iterator): ƒ]
