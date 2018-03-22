// 实参数 > 形参数

function test() {
    console.log(test.arguments==arguments,arguments); //false
    console.log(arguments.length); //2
	console.log(typeof arguments); //object
	console.log(arguments instanceof Array); //false
	console.log(arguments instanceof Object);//true
    console.log(Array.prototype.slice.call(arguments)); //["hello,", "world!"]
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"

//实参数 < 形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3)); //6
console.log(sum(1,2));   //8
console.log(sum(1));     //10