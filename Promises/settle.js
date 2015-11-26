/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
var deferred = Q.defer();
var promise = deferred.promise;
deferred.resolve('OX-13');

promise.then(function(val){
        "use strict";
        console.log('Success with', val);
    }
).catch(function(reason){
        "use strict";
        console.log('Failed with', reason);
    }
);

var rejectDeferred = Q.defer();
var rejectPromise = rejectDeferred.promise;
rejectPromise.then(function(val){
        "use strict";
        console.log('Reject successfully with', val);
    }).catch(function(reason){
        "use strict";
        console.log('Reject failed with', reason);
    }
);