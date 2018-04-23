var arr = new Array();

arr.__proto__ === Array.prototype;
//true
arr.__proto__.__proto__ === Object.prototype;
//true
arr.__proto__.__proto__.__proto__ === null;
//true
