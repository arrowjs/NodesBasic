/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
Q.when(null).then(function (val) {
    "use strict";
   console.log(val === null);
});

Q.when('kung foo').then(function(val){
    "use strict";
   console.log(val);
});

console.log('I will print first because then is always async');