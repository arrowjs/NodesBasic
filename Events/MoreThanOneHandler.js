/**
 * Created by techmaster on 2/21/15.
 */
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var fooA = function() {
    "use strict";
    console.log('Foo A handler called');
};

var fooB = function() {
    "use strict";
    console.log('Foo B handler called');
};
emitter.on('foo', fooA);
emitter.on('foo', fooB);

emitter.emit('foo');