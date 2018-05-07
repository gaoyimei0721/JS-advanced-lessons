//数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);
//2 "不大于3"
//5 "大于3"
//8 "大于3"
// [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	//console.log(a,i,this);
	arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);
//[2, 6, 8]

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看是否会输出8，为什么？
    return a%2===0;
});
console.log(returnValue);
//练习：验证一个百位数，个、十、百 每一位上的数相加可以除尽3的话，则这个百位数就能整除3

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看输出了哪些数，为什么？
    return a%2===0;
});
console.log(returnValue);


//数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);


//数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
// 对reduce的解读 ((((x1 op x2) op x3) op x4)...xn)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
/*
prev a ,cur: b ,i: 1
prev ab ,cur: c ,i: 2
prev abc ,cur: d ,i: 3
abcd
*/
console.log(arr4.reduce(printArgs,"x"));
/*
prev x ,cur: a ,i: 0
prev xa ,cur: b ,i: 1
prev xab ,cur: c ,i: 2
prev xabc ,cur: d ,i: 3
xabcd
*/
console.log(arr4.reduceRight(printArgs));
/*
prev d ,cur: c ,i: 2
prev dc ,cur: b ,i: 1
prev dcb ,cur: a ,i: 0
dcba
*/
console.log(arr4.reduceRight(printArgs,"x"));
/*
prev x ,cur: d ,i: 3
prev xd ,cur: c ,i: 2
prev xdc ,cur: b ,i: 1
prev xdcb ,cur: a ,i: 0
xdcba
*/

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }