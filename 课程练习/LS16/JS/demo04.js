//this缺陷 方法中函数嵌套
//构造函数
function Point(x,y){
    this.x = x,
    this.y = y,
    this.moveXY = function(x,y){
        function moveX(x){
            this.x += x;
        };
        function moveY(y){
            this.y += y;
        };
        moveX(x);
        moveY(y);
    };
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); //Point{x:2,y:3}

//解决方案一：软绑定
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)


//解决方案二：使用call、apply间接调用
function Point(x,y){
    this.x = x,
    this.y = y,
    this.moveXY = function(x,y){
        function moveX(x){
            this.x += x;
        };
        function moveY(y){
            this.y += y;
        };
        moveX.call(this,x);
        moveY.apply(this,[y]);
    };
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); //输出为Point{x:3,y:4}


//解决方案三：使用Function.prototype.bind
function Point(x,y){
    this.x = x,
    this.y = y,
    this.moveXY = function(x,y){
        function moveX(x){
            this.x += x;
        };
        function moveY(y){
            this.y += y;
        };
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    };
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); //Point {x: 3, y: 4, moveXY: ƒ}