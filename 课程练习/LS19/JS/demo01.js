//UTC 协调世界时间 Coordinated Universal Time
//GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time

//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
var date1 = new Date(2017,9,19,12,34,1)
console.log(date1);
//Thu Oct 19 2017 12:34:01 GMT+0800 (中国标准时间)

//若years为2位的话自动加1900
var date2 = new Date(17,9,18,12,34,1);
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
var date3 = new Date("2017-08-09");
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

//补充思考
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);//Number {[[PrimitiveValue]]: 123} "object"
console.log(n2,typeof n2);//123 "number"