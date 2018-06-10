// ES5没有块作用域，变量共享问题
for(var i=0; i<3; i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);
/*
i: 3
undefined
VM267:3 Sun Jun 10 2018 13:27:28 GMT+0800 (中国标准时间) 3
VM267:3 Sun Jun 10 2018 13:27:29 GMT+0800 (中国标准时间) 3
VM267:3 Sun Jun 10 2018 13:27:30 GMT+0800 (中国标准时间) 3
*/

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}