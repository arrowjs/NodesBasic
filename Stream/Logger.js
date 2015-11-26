/**
 * Created by techmaster on 2/22/15.
 */
var Writable = require('stream').Writable;
var util = require('util');

function Logger(){
    "use strict";
    Writable.call(this);
}

util.inherits(Logger, Writable);
Logger.prototype._write = function(chunk){
    "use strict";
    console.log(chunk.toString());
};

var logger = new Logger();
var readStream = require('fs').createReadStream('cool.txt');
readStream.pipe(logger);