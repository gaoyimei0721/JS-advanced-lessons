//方法1：直接添加(属性特性默认都为true)
var obj= {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3

//通过Object.defineProperty添加：属性特性默认为false
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
//通过Object.defineProperty添加的属性，除了手动修改的之外，属性特性默认为false
Object.definePrroerty(obj,'w',{
    value:456,
    configurable:true
});//writable,enumerable没有指定，所有默认为false
for(var k in obj){
    console.log(k,obj[k]); // 遍历不到“w”
}