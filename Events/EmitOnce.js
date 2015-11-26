/**
 * Created by techmaster on 2/21/15.
 */
/**
 * Created by techmaster on 2/21/15.
 */
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var fooHandler = function() {
    "use strict";
    console.log('Foo handler called');
};
emitter.once('foo', fooHandler);

emitter.emit('foo');
emitter.emit('foo');
emitter.emit('foo');