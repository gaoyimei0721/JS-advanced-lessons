/* 
1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
写一个function提取上述字符串中的字符最终输出：[254,289,675]
*/
function restr(str){
    var reg = new RegExp(/[1-9]{3}/,"gi"); 
    return str.match(reg);
}

var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
var arr = restr(s1);
var val = [];
for(var i = 0; i < arr.length; i++)
{
    val[i] = parseInt(arr[i]);
}
console.log(val);