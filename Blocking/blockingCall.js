/**
 * Created by techmaster on 3/8/15.
 */
//Code tham khảo của chú TuDong tại
//http://nodejs.vn/topic/26/serial-develop-node-js-to%C3%A0n-t%E1%BA%ADp/12

function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}

now('> Start to wait');
wait(5000);
now('> Finish waiting');