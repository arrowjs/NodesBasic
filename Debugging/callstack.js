/**
 * Created by techmaster on 2/25/15.
 */
function foo() {
    "use strict";
    console.trace('trace at foo');
    console.log('Print some thing here');
}

function bas() {
    "use strict";
    foo();
}
function bar() {
    "use strict";
    bas();
}

bar();