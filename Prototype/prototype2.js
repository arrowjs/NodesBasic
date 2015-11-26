/**
 * Created by techmaster on 2/15/15.
 */
function foo() {}
foo.prototype.bar = 123;
//Create a object
var bas = new foo();
var fun = new foo();
console.log(bas.__proto__ === foo.prototype);
console.log(bas.bar);  //123

fun.bar = 321; //nếu sửa đổi thì không sử dụng giá trị của prototype nữa
//prototype are shared between all the objects

console.log(bas.bar);  //123
console.log(fun.bar);  //321