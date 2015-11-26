var promise = require("bluebird");
var needle = require('needle');
var getAsync = promise.promisify(needle.get);
console.time('taskA');
getAsync('http://ip.jsontest.com/').then(function(response){
        return response[1].ip;
    }
).then(function(ip){
        return getAsync('http://www.geoplugin.net/json.gp?ip=' + ip);
    }
).then(function(response){
        console.log(response[1]);
        console.timeEnd('taskA');
    }
).catch(function (e) {
        console.error('Error:' + e);
    }
);
