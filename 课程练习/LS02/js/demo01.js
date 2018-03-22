//不同的表达式
23; //23为原始表达式
obj = {x:2}; // ={x:2}为对象初始化表达式
arr = [1,2]; // =[1,2]为数组初始化表达式
var foo = function(){   // =function(){}为函数定义表达式  
    console.log("foo");
};
obj.x; // obj.x为属性访问表达式
foo(); // foo()为函数调用表达式
2+3;   // 2+3为算数运算表达式
2>3;   // 2>3为关系运算表达式
1&&2;  // 1&&2为逻辑运算表达式

function foo(){
    var a=b=3;
}
foo();
console.log("b:",b); // b: 3
console.log("a:",a); // 报错