var onjProto =  {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.loh(obj.x); //1
console.loh(obj.y); //2
console.loh(obj.z); //3

console.log(obj.toString); //原型链上有toString属性

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}





/*上节课知识回顾
//1
var obj1 = {x:1};
//2
var obj2 = Object.create(obj1);
obj2.y = 2;
//3
var Obj3 = function(){this.z= 3;}
var obj3 = Obj3();
*/

