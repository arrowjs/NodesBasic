/**
 * Created by techmaster on 3/8/15.
 */
var promise = require("bluebird");
function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

var arr = [1, 2, 3];
console.time('blocking');
arr.map(function(item){
    var i = item;
    process.nextTick(function(i) {
        wait(1000);
        console.log(item + ' * 2 = ' + item * 2);
    });
});
console.timeEnd('blocking');

console.time('nonblocking');
promise.map(arr, function(item){
    wait(1000);
    console.log(item + ' * 2 = ' + item * 2);
});
console.timeEnd('nonblocking');
/*
var words = ['hello', 'word', 'hell'];
promise.map(words, function(item, index, arrayLength){
    console.log(index + ' : ' + item);
});
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}*/
/*
var delays = [3, 2, 1];
promise.map(delays, function(item){
   setTimeout(function(){
        now('delay ' + item + ' seconds');
   }, 1000 * item);
});*/
/*
delays.map(function(item){
    setTimeout(function(){
        now('delay ' + item + ' seconds');
    }, 1000 * item);
});*/