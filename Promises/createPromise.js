/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
var deferred = Q.defer();  //Defer có nghĩa là để sau mới làm.
var promise = deferred.promise;  //Promise: hành động hứa sẽ làm trong tương lai

//Triển khai cụ thể hàm sẽ làm
promise.then(function(val){
    "use strict";
   console.log('done with: ', val);
});

//Khởi tạo biến ban đầu để tương lai sẽ thực hiện
deferred.resolve('OX-13');