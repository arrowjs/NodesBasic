/**
 * Created by techmaster on 3/8/15.
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

now('> Start to wait');
process.nextTick(function(){
    now('> Do this task at the end of event queue');
});
now('> Do other task');