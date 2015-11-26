/**
 * Created by techmaster on 3/8/15.
 */
var tcpp = require('tcp-ping');
var Promise = require('bluebird');

function ping(url) {
    return new Promise(function(fulfill, reject){
        tcpp.ping({address: url}, function(err, data){
           if (err) {
               reject(err);
           } else {
               fulfill(data);
           }
        });
    });
}
/*
 .some(int count) -> Promise
 Initiate a competitive race between multiple promises or values
 (values will become immediately fulfilled promises).
 When count amount of promises have been fulfilled,
 the returned promise is fulfilled with an array that contains the fulfillment
 values of the winners in order of resolution.

 This example pings 4 name servers, and logs the fastest 2 on console:
 */
Promise.some([
    ping("techmaster.vn"),
    ping("dantri.com.vn"),
    ping("myclass.vn"),
    ping("vnexpress.net"),
    ping("lite.baomoi.com")
], 2).spread(function(first, second) {
    console.log(first.address, first.avg);
    console.log(second.address, second.avg);
});