/**
 * Created by techmaster on 2/25/15.
 */
var foo = {
    bar: 123,
    inspect: function() {
        "use strict";
        debugger;
        return 'Bar is ' + this.bar;
    }
};

console.log(foo);