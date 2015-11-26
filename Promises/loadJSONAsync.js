/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
var fs = require('fs');
var readFileAsync = Q.nbind(fs.readFile);
/*Creates a promise-returning function from a Node.js-style method, optionally binding it with
the given variadic arguments.*/

function loadJSONAsync(filename) {
    "use strict";
    return readFileAsync(filename).then(function(res){
       return JSON.parse(res);
    });
}

loadJSONAsync('good.json').then(function(val){
    "use strict";
    console.log(val);
}).catch(function(err){
    "use strict";
    console.log('Error parse json', err.message);
}).then(function(){
        "use strict";
        return loadJSONAsync('absent.json');
    }
).then(function(val){
        "use strict";
        console.log(val);
    }).catch(function(err){
        "use strict";
       console.log('absent.json error', err.message);
    });