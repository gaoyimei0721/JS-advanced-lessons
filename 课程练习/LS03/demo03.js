console.log(3==new String(3));  //true
console.log(3===new String(3)); //false


var obj1 = new String("xyz"); 
var obj2 = new String("xyz");
console.log("xyz"===obj1);  //false
console.log(obj1 == obj2);  //false
console.log(obj1 === obj2); //false
console.log(obj1 == new String("xyz")); //false


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1); //false
console.log(obj1 !== obj2); //true
console.log(obj1 != obj2); //true
console.log(obj1 != new String("xyz")); //true


console.log(2 == 2); //true
console.log(new Number(2) == new Number(2)); //false
console.log(2 == new Number(2)); //true