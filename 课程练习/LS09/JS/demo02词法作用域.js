//词法作用域

var name = "Jack";
function echo(){
    console.log(name);
}
echo();
// Jack


//词法作用域 与调用形式无关 

//例一：
var name = "Jack"
function echo(){
    console.log(name);
}
function foo(){
    var name = "Bill";
    echo();
}
foo();
// Jack

//例二:
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
// Jack


//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "global";
function checkScope(){
    var scope = "local";
    return function(){
        return scope;
    };
}
console.log(checkScope()()); // local

var scope = "global";
function checkScope(){
    var scope = "local";
    return new Function("return scope;");        
}
console.log(checkScope()()); //global