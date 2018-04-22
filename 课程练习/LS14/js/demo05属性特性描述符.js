//属性特性描述符是一个用来查看对象属性的特性的对象
//该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得
var obj = {x:1};
Object.defineProperty(obj,"y",{
    value:2,
    writable:false
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//Object.getOwnPropertyDescriptor(obj,"y");
//Object.getOwnPropertyDescriptor(obj,"z");