/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
Q.when(null).then(function(){
    "use strict";
    throw new Error('Cannot connect to database server');
}).then(function(val){
    "use strict";
    console.log('this line is never called');
}).catch(function(reason){
    "use strict";
    console.log('Error:', reason.message);
    return 'all good';
}).then(function(val){
    "use strict";
    console.log(val);
    return Q.reject(new Error('Network is broken'));
}).then(function(val){
    "use strict";
    console.log('I never get called');
}).catch(function(reason){
    "use strict";
    console.log('Error2:', reason.message);
});