/**
 * Created by techmaster on 2/23/15.
 */
var fs = require('fs');
function loadJSONSync(filename) {
    "use strict";
    return JSON.parse(fs.readFileSync(filename));
}

//good json file
console.log(loadJSONSync('good.json'));

try {
    console.log(loadJSONSync('absent.json'));
} catch (err) {
    console.log('absent.json error', err.message);
}

try {
    console.log(loadJSONSync('bad.json'));
} catch (err) {
    console.log('bad.json error', err.message);
}