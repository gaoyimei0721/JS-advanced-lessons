//方法1：call 调用一个普通函数或对象的方法时，用另一个对象替换当前对象
//call([thisObj[, arg1[, arg2[, [, argN]]]]])
//它允许您将函数的 this 对象从初始上下文变为由 thisObj 指定的新对象。
// 如果没有提供 thisObj 参数，则 global 对象被用作 thisObj。
// 与apply方法不同的地方是，apply的第二个参数类型必须是Array，
// 而call方法是将所有的参数列举出来，用逗号分隔
function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);
swim.call(me,3,4);
bird.fly(5,6);
bird.fly.call(me,7,8);
bird.fly.apply(me,[7,8]);
swim.call(null,1,2);

//方法2：apply
//functionName.apply([thisObj[,argArray]])
//与call方法不同的地方是，apply的第二个参数类型必须是Array
swim.apply(me,[9,10]);
bird.fly.apply(me,[11,12]);
swim.apply(null,[13,14]);

//方法3：关于绑定 bind 
//例一
var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo.bind(this)();
        foo();
    }
};
obj.test();
//23 45
//例二  硬绑定
// function.bind(thisArg[,arg1[,arg2[,argN]]])
// 在绑定功能中，this对象解析为传入的对象。
// 返回一个与 function 函数相同的新函数，只不过函数中的this对象和参数不同。
// Define the original function.
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};

// The range object will become the this value in the callback function.
var range = { minimum: 10, maximum: 20 };

// Bind the checkNumericRange function.
var boundCheckNumericRange = checkNumericRange.bind(range);

// Use the new function to check whether 12 is in the numeric range.
var result = boundCheckNumericRange (12);//相当于range.boundCheckNumericRange (12)
console.log(result);//true