/**
 * Created by techmaster on 3/11/15.
 */
var Promise = require("bluebird");
function doTask(task){
    return new Promise(function(fulfill, reject) {
        setTimeout(function(){
            fulfill(task);
        }, 2000);
    });
}
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

var tasks = ['task A', 'task B'];
now('start');
Promise.map(tasks, function(task){
    return doTask(task).then(function(result) {
        now(result);  //In ra thời điểm và kết quả khi từng tác vụ thành công. Thứ tự sẽ khác với thứ tự các phần tử mảng
        return result;
    }).catch(function(err){
        console.log('error: ', err.message);
    });

});