/**
 * Created by techmaster on 2/24/15.
 */
var fs = require('fs');
function loadJSON(filename, cb) {
    "use strict";
    fs.readFile(filename, function(err, data){
       if (err) {
           return cb(err);
       }
       var parsed;
       try {
           //Ở trong try không gọi callback
           parsed = JSON.parse(data);
       } catch (err) {
           return cb(err);
       }
       //Nếu phần thực thi try thành công thì mới gọi callback
       return cb(null, parsed);
    });
}

loadJSON('bad.json', function(err, data){
    "use strict";
    console.log('Our callback called');
    if (err) {
        console.log('bad.json error', err.message);
    } else {
        console.log(data);
    }
});