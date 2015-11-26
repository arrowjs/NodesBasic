/**
 * Created by techmaster on 2/15/15.
 */
var foo = {};
foo.__proto__.bar = 123;
console.log(foo.bar);