/**
 * Created by techmaster on 3/8/15.
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

function wait(fn, miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
    fn();
}

now('> Start to wait');
setTimeout(function(){now('> End of waiting');}, 5000); // Thay wait bằng setTimeout
now('> Do other task');