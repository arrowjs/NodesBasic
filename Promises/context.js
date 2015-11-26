/**
 * Created by techmaster on 2/24/15.
 */
var foo = {
    bar: 123,
    bas: function(cb){  //Truyền tham số là hàm callback vào
        "use strict";
        cb(null, this.bar);
    }
};

var Q = require('q');
var basAsync = Q.nbind(foo.bas, foo);
basAsync().then(function(val){  //định nghĩa phần callback
    "use strict";
   console.log(val);
});