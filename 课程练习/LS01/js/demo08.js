var a;
console.log(a); //undefined

function foo(x,y){
    console.log(x,y); // 1 undefined
}
foo(1);

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined

console.log(typeof null); //object