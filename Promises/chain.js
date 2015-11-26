/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
Q.when(null).then(function(){
    "use strict";
    return 'Kung foo';
}).then(function(val){
    "use strict";
    console.log(val);
    return Q.when('Panda');
}).then(function(val){
    "use strict";
    console.log(val);
    //nothing return
}).then(function(val){
    "use strict";
    console.log(val=== undefined);
});