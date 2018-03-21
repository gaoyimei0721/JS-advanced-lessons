//严格模式

//全局使用
"use strict"

//函数内部使用
function foo(){
    "use strict"
}


//严格模式下全局变量需显示声明
function sloppyFunc(){
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
//123

function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
//报错


//检测是否在严格模式的方法
"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" 
console.log(isStrictMode());