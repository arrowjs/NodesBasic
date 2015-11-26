/**
 * Created by techmaster on 2/25/15.
 */
var Q = require('q');
function sleepAsync(ms){
    "use strict";
    var deferred = Q.defer();
    setTimeout(function(){
       deferred.resolve();
    }, ms);
    return deferred.promise;
}

console.time('sleep');
sleepAsync(1000).then(function(){
    "use strict";
    console.timeEnd('sleep');
});
console.log('Run immediately');
/*
console.time('sleep2');
setTimeout(function(){
    "use strict";
    console.timeEnd('sleep2');
}, 1000);
    */