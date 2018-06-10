//ES6  let变量和const常量的特性 -- 不进行变量提升特性

//var 声明前可以使用该变量
console.log(a);
var a = 1;
console.log(a);
/*等价于
var a ;
console.log(a);  // undefined
a = 1;
console.log(a);  // 1
*/

//let不提升 在声明前不能使用该变量
console.log(a); //报错
let a = 2;
console.log(a);

//思考下述代码输出什么？理解ES5中，是否有块作用域，是否有函数作用域，如何理解下述代码
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();