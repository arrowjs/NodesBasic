/**
 * Created by techmaster on 2/23/15.
 */
function first(data, cb) {
    "use strict";
    console.log('Executing first');
    setTimeout(cb, 1000, data);
}

function second(data, cb) {
    "use strict";
    console.log('Executing second');
    setTimeout(cb, 1000, data);
}

function third(data, cb) {
    "use strict";
    console.log('Executing third');
    setTimeout(cb, 1000, data);
}

//Named handlers
function handleThird(text3) {
    "use strict";
    console.log('done:', text3);
}
function handleSecond(text2) {
    "use strict";
    third(text2, handleThird);
}
function handleFirst(text1) {
    "use strict";
    second(text1, handleSecond);  //Handle First lại gọi hàm second. Hàm second call back handleSecond
}

first('The world is so wild', handleFirst); //truyền HandlerFirst vào.