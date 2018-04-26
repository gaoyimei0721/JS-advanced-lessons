//this缺陷 方法中函数嵌套
//此函数中的this此时指向的是全局对象window而不是point
var point = {
    x : 0,
    y : 0,
    moveTo : function(x,y){
        //内部函数
        function moveToX(x){
            this.x = x;
        };
        //内部函数
        function moveToY(y){
            this.y = y;
        };
        moveToX(x);
        moveToY(y);
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y)

//解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point); //Object {x: 2, y: 2}
console.log(window.x,window.y);//Error


//解决方案二：使用call、apply间接调用
var point = {
    x : 0,
    y : 0,
    moveTo : function(x,y){
        //内部函数
        function moveToX(x){
            this.x = x;
        };
        //内部函数
        function moveToY(y){
            this.y = y;
        };
        moveToX.call(this);
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point); //2,0
console.log(x); //Error
console.log(y); //2


//解决方案三：使用Function.prototype.bind
var point = {
    x : 0,
    y : 0,
    moveTo : function(x,y){
        //内部函数
        function moveToX(x){
            this.x = x;
        };
        //内部函数
        function moveToY(y){
            this.y = y;
        };
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point); // {x: 2, y: 2, moveTo: f}