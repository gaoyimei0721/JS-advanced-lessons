//修改属性特性:Object.defineProperty(obj,"x",{属性:特性}
/*JS对象属性（数据属性）的特性
- 属性的值（[[value]]），对应属性的值
- 可写特性（[[writable]]），确定属性是否可写性
- 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
- 可枚举特性（[[enumerable]]），属性是否可枚举
*/

//可枚举特性
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]); //y:2
}

//可写特性 可配置特性
var person = {name:"Jack"};
Object.definedProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike