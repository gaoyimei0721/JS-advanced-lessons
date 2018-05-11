var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);

//test忽略全局，只返回true 和 false
console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}

//exec可获得详细信息
var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);