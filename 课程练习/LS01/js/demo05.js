//基本(原始)数据类型与引用(对象)类型的区别2：函数参数传递方式不同
(function(){
//值传递
var str_a = "Hello World";
function fn_a(arg){
    console.log(arg);      //#1 --> Hello World
    //从上面#1处可以看出，传入函数fn_a的是str_a的值
    arg = "Hai";
    console.log(str_a,arg);//#2 --> Hello World,Hai
    //并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
    //所以在#2处打印的是2个不同的字符串。
};
fn_a(str_a);
console.log(str_a);        //#3 --> Hello World
//因为传值时候对str_a值进行了值的复制，而这又是原始类型的值，
//所以在#3处的str_a与早先声明的str_a保持一致

//引用传递
var obj = {value:1};
function fn_a(arg){
    arg.value = 3;
};
fn_a(obj);
console.log(obj); //{value:3}

function fn_b(arg){
    arg = {value:2};
    console.log(arg);//{value:2}
};
fn_b(obj);
console.log(obj); //{value:3}
}());