var fs = require('fs');
var promise = require('bluebird');
promise.promisifyAll(fs);
var files = ["bad.json", "good.json"];

promise.resolve().then(function() {
    return [fs.readFileAsync("bad.json"),
        fs.readFileAsync("good.json")] ;
}).spread(function(file1text, file2text) {
    console.log('file 1:\n\n', file1text.toString());
    console.log('file 2:\n\n', file2text.toString());
    if (file1text === file2text) {
        console.log("files are equal");
    }
    else {
        console.log("files are not equal");
    }
});