/**
 * Created by techmaster on 2/23/15.
 */
/**
 * Created by techmaster on 2/23/15.
 */
//Hàm này có tham số là hàm callback
function loadItem(id, callback) {
    "use strict";
    setTimeout(function(){
        callback(null, {id: id});
    }, 100 + Math.random() * 600);
}

//Định nghĩa hàm call back
function itemsLoaded(err, loadedItems) {
    "use strict";
    console.log('Do something with: ', loadedItems);
}

var async = require('async');
//Cùng một lúc gọi 3 hàm
async.parallel([
        function(cb){
            "use strict";
            loadItem(3, cb);
        },
        function (cb) {
            "use strict";
            loadItem(4, cb);
        },
        function (cb) {
            "use strict";
            loadItem(1, cb);
        }
    ], itemsLoaded
)