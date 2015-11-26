var promise = require("bluebird");
var needle = require('needle');
var fs = require('fs');
var getAsync = promise.promisify(needle.get);
var writeFileAsync = promise.promisify(fs.writeFile);

//Trả về promise ipDecodePromise
var ipDecodePromise = getAsync('http://ip.jsontest.com/').then(function(response){
        return response[1].ip;
    }
).then(function(ip){
        return getAsync('http://www.geoplugin.net/json.gp?ip=' + ip);
    }
);
//then thứ nhất
ipDecodePromise.then(function(response){
        console.log(response[1]);
    }
).catch(function (e) {
        console.error('Error:' + e);
    }
);
//then thứ hai
ipDecodePromise.then(function(response) {
    return writeFileAsync('ipdecode.txt', response[1]);
}).then(function(){
    console.log('Write to file ipdecode.txt successfully');
}).catch(function (e) {
        console.error('Error:' + e);
    }
);
