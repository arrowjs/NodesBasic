/**
 * Created by techmaster on 1/11/15.
 */
var util         = require("util");
var EventEmitter = require("events").EventEmitter;

function Ticker () {
    EventEmitter.call(this);
    var self = this; //Phải gán self bằng this thì sau đó mới dùng self. this không dùng được trong hàm call
    setInterval(function() {
        self.emit("tick");
    }, 1000);
}
util.inherits(Ticker, EventEmitter);



module.exports = Ticker;
