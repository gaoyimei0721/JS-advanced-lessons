//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
'use strict';
delete foo;
delete window.foo;


//严格模式下禁止函数参数重名
function f(a, a, b) {
    return a+b;
}
f(2,3,4);
// 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);
//严格模式下报错


//严格模式下的arguments，变与不变
function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);
console.assert(pair[0] === 42);
//true
console.log(pair[1]);
console.assert(pair[1] === 17);
//true