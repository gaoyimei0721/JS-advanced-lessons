//函数定义、声明方式
//方法一
function max(a,b){
    return a>b?a:b;
}
max(5,8);
//方法二 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);
//方法三
var str = "return a>b?a:b";
var min = new Function("a","b",str);
min(4,2); 