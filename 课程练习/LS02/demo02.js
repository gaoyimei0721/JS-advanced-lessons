//ES5中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);
//大括号外依然能访问到a:20

for(var i=0; i<5; i++){
    console.log("in for",i);
}
console.log("out of for",i);
//in for 0
//in for 1
//in for 2
//in for 3
//in for 4
//out of for 5

if(true){
    var a = 20;
}
console.log(a);
//20

if(false){
    var a
    b = 20;
}
console.log(b);
//报错

