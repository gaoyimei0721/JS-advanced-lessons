//立即执行表达式IIFE
//形式一：
(function min(x,y){
    console.log("the min is",x<y?x:y);
}(528,721));
//形式二：
(function min(x,y){
    console.log("the min is",x<y?x:y);
})(528,721);
           //要加分号

// 其他形式的IIFE 与运算符结合的写法

0 && function(a,b){
    return a>b?a:b;
}(528,721);
//0

!function(x,y){
    return x==y?true:false;
}("5",5);
//false

!function(x,y){
    return x===y?true:false;
}("5",5);
//true

var i = function(){
    return 10;
}(); 
//i为10

