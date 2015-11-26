/**
 * Created by techmaster on 2/21/15.
 */
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function Network(name) {
    "use strict";
    EventEmitter.call(this);
    this.name = name;  //Thêm một thuộc tính cho Network
}
//Để Network kế thừa EventEmitter
inherits(Network, EventEmitter);

Network.prototype.connect = function() {
    "use strict";
    this.emit('connected');  //kích hoạt event có tên 'connected'
};

var network = new Network('192.168.1.1');
network.on('connected', function () {
    "use strict";
    console.log(this.name, 'is connected successfully');
});

network.connect();