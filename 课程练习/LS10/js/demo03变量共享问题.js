//变量共享
function f(){
    var getNumFuncs = [];
    for(var i=0; i<10; i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//10

//上式等价于
function f(){
    var getNumFuncs = [];
    var i=0;
    for(; i<10; i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();

//IIFE解决变量共享问题
function f(){
    var getNumFuncs = [];     //空函数数组
    for(var i=0; i<10; i++){
        (function (j){
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//3