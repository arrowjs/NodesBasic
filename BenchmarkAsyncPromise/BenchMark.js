/**
 * Created by techmaster on 3/4/15.
 * Ví dụ hướng dẫn benchmark một tác vụ
 */
var needle = require('needle');
var promise = require("bluebird");
promise.promisifyAll(needle);

var URLs = ["http://ip.jsontest.com/", "http://echo.jsontest.com/key/value/one/two"];
var current = promise.resolve();
console.time('taskA');

promise.map(URLs, function (URL) {
    current = current.then(function () {
        return needle.getAsync(URL);
    });
    return current;
}).map(function(responseAndBody){
    return responseAndBody[1];
}).then(function (results) {
    console.log(results);
    console.timeEnd('taskA');
}).catch(function (e) {
    console.error(e);
    console.timeEnd('taskA');
});