/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
function getPromise() {
    "use strict";
    var deferred = Q.defer();
    /*setTimeout(function(){
       deferred.resolve('OX-13');
    }, 1000);*/

    process.nextTick(function(){
            deferred.resolve('OX-13');
        }
    );
    return deferred.promise;
}

var promise = getPromise();
promise.then(function(val){
    "use strict";
    console.log('Done with: ', val);
});