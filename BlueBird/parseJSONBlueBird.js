/**
 * Created by techmaster on 2/25/15.
 */
var fs = require('fs');
var promise = require('bluebird');
console.time('xx');
var readFileAsync = promise.promisify(fs.readFile);  //chỉ convert duy nhất hàm fs.readFile
console.timeEnd('xx');  //Mất khoảng 2 milisecond
readFileAsync("bad222.json").then(JSON.parse).then(function(json) {
    console.log(json);
}).catch(SyntaxError, function(e) {
    console.error("invalid json in file", e.message);
}).catch(function(e){
    console.error("unable to read file", e.message);
});

/*
Xem chi tiết giải thích về Promisification ở đây
 https://github.com/petkaantonov/bluebird/blob/master/API.md#promisification

 Promisification means converting an existing promise-unaware API to a promise-returning API.
 The usual way to use promises in node is to promisifyAll some API and start exclusively calling
 promise returning versions of the APIs methods.
 */