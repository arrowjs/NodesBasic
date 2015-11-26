/**
 * Created by techmaster on 2/22/15.
 */
function first(data, cb) {
    "use strict";
    console.log('Executing first');
    setTimeout(cb, 1000, data);
}

function second(data, cb) {
    "use strict";
    console.log('Executing second', data);
    setTimeout(cb, 1000, data);
}

function third(data, cb) {
    "use strict";
    console.log('Executing third');
    setTimeout(cb, 1000, data);
}
//first sẽ gọi second, sau đó gọi third
first('Hello World', function(text1){  //function(text1) định nghĩa cb cho vào first
    "use strict";
   second(text1, function(text2){
      third(text2, function(text3){
         console.log('done: ', text3);
      });
   });
});