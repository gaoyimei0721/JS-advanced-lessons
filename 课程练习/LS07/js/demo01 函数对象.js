// JS中函数也是对象
function foo(){};
console.log(foo);                      //ƒ foo(){}
console.log(typeof foo);               //function 
console.log(foo instanceof Object);    //true
console.log(foo instanceof Function);  //true
console.log(foo === window.foo);       //true

console.log(typeof new Function());         //function
console.log(typeof new new Function());     //object
console.log(typeof new new new Function()); //报错

//内置的函数对象：Array Function Date Error等
console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
//内置的非函数对象：Math JSON
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

console.log(typeof new Function()); //function
console.log(typeof new Array());    //object
console.log(typeof new Date());     //object

console.log(Function instanceof Function); //true
console.log(Function instanceof Object);   //true

console.log(Array instanceof Function);    //true
console.log(Array instanceof Object);      //true

console.log(Date instanceof Function);     //true
console.log(Date instanceof Object);       //true

console.log(Math instanceof Function);     //false
console.log(Math instanceof Object);       //true

console.log(JSON instanceof Function);     //false
console.log(JSON instanceof Object);       //true



