/**
 * Created by techmaster on 3/4/15.
 */
var promise = require("bluebird");
var readFileAsync = promise.promisify(require('fs').readFile);

promise.all([readFileAsync('good.json'), readFileAsync('bad.json')]).
    then(function(files) {
        console.log(files[0].toString(), files[1].toString());
    }).catch(function(err){
        console.error('Cannot not read file ' + err.message);
    });
