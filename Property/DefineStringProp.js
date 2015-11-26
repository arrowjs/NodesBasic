/**
 * Created by techmaster on 2/21/15.
 */
//Cách này hay hơn Object.prototype.__defineGetter__()
Object.defineProperty( String.prototype, 'red', {
    get: function () {
        "use strict";
        var redCode = '\x1b[31m';
        var clearCode = '\x1b[39m';
        return redCode + this + clearCode;
    }
});

console.log('Hello World!'.red);