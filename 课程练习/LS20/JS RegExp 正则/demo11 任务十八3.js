/*
3.写出正则表达式，从一个字符串中提取链接地址。
如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
*/

function IsUrl(str){
    var reg = new RegExp(/www\.[A-Za-z0-9]+\.(com|cn)/,"gi");
    return str.match(reg);
}
​
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
IsUrl(s3);