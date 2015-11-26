var promise = require('bluebird');
var readFileAsync = promise.promisify(require('fs').readFile);

promise.resolve().then(function() {
    return [readFileAsync("test.txt", 'utf8'),
        readFileAsync("test2.txt", 'utf8')] ;
}).spread(function(file1text, file2text) {
    console.log(file1text);
    console.log(file2text);
    if (file1text === file2text) {
        console.log("files are equal");
    } else {
        console.log("files are equal");
    }
}).catch(function(err){
    console.log(err.message);

});
/*

promise.try(function() {
    return [readFileAsync("test3.txt", 'utf8'),
        readFileAsync("test2.txt", 'utf8')] ;
}).spread(function(file1text, file2text) {
    if (file1text === file2text) {
        console.log("files are equal");
    } else {
        console.log("files are equal");
    }
}).catch(function(err){
    console.log(err.message);

});*/