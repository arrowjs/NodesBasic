/**
 * Created by techmaster on 3/8/15.
 */
//http://nodejs.vn/topic/26/serial-develop-node-js-to%C3%A0n-t%E1%BA%ADp/13
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

function wait(fn, miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
    fn();
}

now('> Start to wait');
wait(function(){now('> End of waiting');}, 5000);
now('> Do other task');