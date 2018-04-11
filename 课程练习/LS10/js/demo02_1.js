//如何避免文件之间的全局污染，使用IIFE函数立即执行表达式
(function (){      //IIFE开始
    var x = 10;
    document.onclick = function(){
        alert("x = "+x);
    }
})();             //IIFE结束