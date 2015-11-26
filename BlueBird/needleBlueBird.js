/*
Tham khảo từ link này http://stackoverflow.com/questions/19385745/nodejs-with-async-requests/19385911#19385911
 */
var promise = require("bluebird");
var needle = require('needle');
promise.promisifyAll(needle);

var URLs = ["http://ip.jsontest.com/", "http://echo.jsontest.com/key/value/one/two"];
var current = promise.resolve();

promise.map(URLs, function (URL) {
    current = current.then(function () {
        return needle.getAsync(URL);
    });
    return current;
}).map(function(responseAndBody){
    return responseAndBody[1];
}).then(function (results) {
    console.log(results);
}).catch(function (e) {
    console.error(e);
});