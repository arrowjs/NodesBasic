/**
 * Created by techmaster on 3/10/15.
 */
var promise = require("bluebird");
function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}

var arr = ['task A', 'task B', 'task D', 'task E'];

function doTask(task){
    return new Promise(function(fulfill, reject) {
        var x = task;
        switch (x) {
            case 'task A':
                setTimeout(function(){
                    fulfill('task A completes');
                }, 1000);
                break;
            case 'task B':
                setTimeout(function(){
                    fulfill('task B completes');
                }, 1000);
                break;
            case 'task C':
                setTimeout(function(){
                    var err = new Error();
                    err.message = x + '. Cable is broken';
                    reject(err);
                }, 3000);
                break;

            default :
                setTimeout(function(){
                    fulfill(x + ' completes');
                }, 1000);
                break;
        }
    });
}
console.time('time');
promise.map(arr, function(task){
    return doTask(task);
}).then(function(result){
    console.log(result);
    console.timeEnd('time');
}).catch(function(err){
    console.log(err.message);

}, {concurrency: 1});
/*
promise.all(promise.map(arr, function(task){
    return doTask(task);
})).then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err.message);
 console.timeEnd('time');
});*/
