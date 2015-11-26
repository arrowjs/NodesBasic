/**
 * Created by techmaster on 3/8/15.
 */
var Promise = require("bluebird");
var join = Promise.join;
var fs = Promise.promisifyAll(require("fs"));
fs.readdirAsync(".").map(function(fileName) {
    var stat = fs.statAsync(fileName);
    var contents = fs.readFileAsync(fileName).catch(function ignore() {});
    return join(stat, contents, function(stat, contents) {
        return {
            stat: stat,
            fileName: fileName,
            contents: contents
        };
    });
// The return value of .map is a promise that is fulfilled with an array of the mapped values
// That means we only get here after all the files have been statted and their contents read
// into memory. If you need to do more operations per file, they should be chained in the map
// callback for concurrency.
}).call("sort", function(a, b) {
    return a.fileName.localeCompare(b.fileName);
}).each(function(file) {
    var contentLength = file.stat.isDirectory() ? "(directory)" : file.contents.length + " bytes";
    console.log(file.fileName + " last modified " + file.stat.mtime + " " + contentLength);
});

