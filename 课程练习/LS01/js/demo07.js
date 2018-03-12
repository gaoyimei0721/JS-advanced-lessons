//字面量
var str = "abc_def_ghi_jkl_mn"; 

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
//abc
//defghi\
//'mn'

//字符串常用操作
var str1 = "abc_def_ghi_jkl_mn";
console.log(str1.split("_"));//["abc", "def", "ghi", "jkl", "mn"]
var str2 = "abc_def_ghi_jkl_mn";
console.log(str2.split("_",2));//["abc", "def"]
var str3 = "abc_def_ghi_jkl_mn";
console.log(str3.concat("_opq"));//abc_def_ghi_jkl_mn_opq
var str4 = "abc_def_ghi_jkl_mn";
console.log(str4.substr(4,7));//def_ghi
var str = "abc_def_ghi_jkl_mn";
console.log(str.substring(4,7));//def
var str = "abc_def_ghi_jkl_mn";
console.log(str.slice(2));//c_def_ghi_jkl_mn
var str = "abc_def_ghi_jkl_mn";
console.log(str.slice(2,5));//c_d
var str = "abc_def_ghi_jkl_mn";
console.log(str.slice(-2));//mn
var str = "abc_def_ghi_jkl_mn";
console.log(str.slice(2,-2));//c_def_ghi_jkl_

var str = "abc_def_ghi_jkl_mn";
console.log(str.bold());//<b>abc_def_ghi_jkl_mn</b>
var str = "abc_def_ghi_jkl_mn";
console.log(str.link());//<a href="undefined">abc_def_ghi_jkl_mn</a>
var str = "abc_def_ghi_jkl_mn";
console.log(str.fontcolor("red"));//<font color="red">abc_def_ghi_jkl_mn</font>
var str = "abc_def_ghi_jkl_mn";
console.log(str.fontsize(50));//<font size="50">abc_def_ghi_jkl_mn</font>
