//变量共享问题
for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);
// i: 5
// Mon Apr 09 2018 15:20:20 GMT+0800 (中国标准时间) 5
// Mon Apr 09 2018 15:20:21 GMT+0800 (中国标准时间) 5
// Mon Apr 09 2018 15:20:22 GMT+0800 (中国标准时间) 5
// Mon Apr 09 2018 15:20:23 GMT+0800 (中国标准时间) 5
// Mon Apr 09 2018 15:20:24 GMT+0800 (中国标准时间) 5

//通过IIFE解决
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
// Mon Apr 09 2018 15:22:01 GMT+0800 (中国标准时间) 0
// Mon Apr 09 2018 15:22:02 GMT+0800 (中国标准时间) 1
// Mon Apr 09 2018 15:22:03 GMT+0800 (中国标准时间) 2
// Mon Apr 09 2018 15:22:04 GMT+0800 (中国标准时间) 3
// Mon Apr 09 2018 15:22:05 GMT+0800 (中国标准时间) 4