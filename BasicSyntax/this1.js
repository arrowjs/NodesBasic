/**
 * Created by techmaster on 2/15/15.
 */
var foo = {
    bar: 123,
    bas: function() {
        "use strict";
        console.log('inside this.bar is:', this.bar);
    }
};
console.log('foo.bar is: ', foo.bar);
foo.bas();

function fun() {
    //without "use strict", it returns true
    console.log('is this called from global?: ', this === global);
}
fun();

function fun2() {
    "use strict";  //With use strict it returns false
    console.log('is this called from global?: ', this === global);
}
fun2();