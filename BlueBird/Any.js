var tcpp = require('tcp-ping');
var Promise = require('bluebird');

//Promisify callback function
function ping(url) {
    return new Promise(function(fullfill, reject){
        tcpp.ping({address: url}, function(err, data){
            if (err) {
                reject(err);
            } else {
                fullfill(data);
            }
        });
    });
}
//Like .some(), with 1 as count. However, if the promise fulfills, the fulfillment
// value is not an array of 1 but the value directly.
//Promise nào hoàn thành nhanh nhất sẽ được chọn ra
Promise.race([
    ping("techmaster.vn"),
    ping("dantri.com.vn"),
    ping("myclass.vn"),
    ping("vnexpress.net"),
    ping("lite.baomoi.com")
]).then(function(result) {
    console.log(result);
});