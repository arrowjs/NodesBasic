/**
 * Created by techmaster on 2/23/15.
 */
var fs = require('fs');
function loadJSON(filename, cb) {
    "use strict";
    fs.readFile(filename, function(err, data){
       if (err) {
           cb(err);
       } else {
           //cb(null, JSON.parse(data)); //Lỗi xuất hiện ở lệnh JSON.parse nhưng sẽ không trả về hàm callback

           try {
               cb(null, JSON.parse(data));
               console.log('Vì có lỗi ở hàm callback nên đoạn này sẽ không thực thi');
           } catch (err) {
               //Sau khi catch xong, lại gọi call back lần nữa!. Đây là nguyên nhân gây ra 2 lần console.log
               cb(err);
           }
       }
    });
}

loadJSON('good.json', function(err, data){
    "use strict";
   console.log('Our callback called');  //Bị gọi thành 2 lần
   if (err) {
       console.log('bad.json error', err.message);
   } else {
       var foo;
       console.log(foo.bar);
   }
});