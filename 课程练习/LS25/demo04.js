//false 捕获   true  冒泡
/*
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },false);

    div2.addEventListener("click",function(e){
        console.log("div2 click");
    },false);

    document.addEventListener("click",function(e){
        console.log("document click");
    },false);

    document.body.addEventListener("click",function(e){
        console.log("body click");
    },false);
}
div2 click
div1 click
body click
document click */

window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },true);

    div2.addEventListener("click",function(e){
        console.log("div2 click");
    },true);

    document.addEventListener("click",function(e){
        console.log("document click");
    },false);

    document.body.addEventListener("click",function(e){
        console.log("body click");
    },true);
}
/*
body click
div1 click
div2 click
document click */