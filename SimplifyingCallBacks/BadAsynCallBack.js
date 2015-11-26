function getData(useCache, callback) {
    var fun = " Hello World";
    if (useCache) {
        callback('cached data' + fun);
        /*process.nextTick(function(){
            callback('cached data' + fun);
        });*/
    } else {
        setTimeout(function(){
            callback('loaded data' + fun);
        }, 1000);

    }
}

console.log("Do task A");
getData(true, function(data){
    processData(data);
});
console.log("Do task C");

function processData(data) {
    console.log('processData', data);
}

