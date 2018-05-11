/*
2.给定这样一个连字符串，var s2 = "get-element-by-id";
写一个function转换为驼峰命名法形式的字符串输出：getElementById
*/
//slice() 方法可从已有的数组中返回选定的元素。

function CamelCase(str){
    return str.replace(/-\w/g,function(s){
        return s.slice(1).toUpperCase();
    });
}

var s2 = "get-element-by-id";
CamelCase(s2);