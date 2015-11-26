/**
 * Created by techmaster on 2/25/15.
 */
var promise = require("bluebird");
var needle = require('needle');
promise.promisifyAll(needle);
console.time('taskA');
var current = promise.resolve();
current.then(
    function(){
        return needle.getAsync('http://ip.jsontest.com/');
    }
).then(function(response){
        return response[1].ip;
    }
).then(function(ip){
        return needle.getAsync('http://www.geoplugin.net/json.gp?ip=' + ip);
    }
).then(function(response){
        console.log(response[1]);
        console.timeEnd('taskA');
    }
).catch(function (e) {
        console.error('Error:' + e);
    }
);

console.log("Non blocking I/O");

