/**
 * Created by techmaster on 3/4/15.
 */
var promise = require('bluebird');
var fs = require('fs');
var readFileAsync = promise.promisify(fs.readFile);

promise.promisify(fs);
//Cách viết thứ 1
/*readFileAsync('/etc/passwd').then(function(val) {
        console.log(val.toString());
    }).catch(function(e){
        console.error("unable to read file");
    });*/

//Cách viết thứ 2
readFileAsync('/etc/passwd').then(function(val) {
    console.log(val.toString());
}, function(e){
    console.error("unable to read file", e.message);
});




//https://promise-nuggets.github.io/articles/03-power-of-then-sync-processing.html