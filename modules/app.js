/**
 * Created by techmaster on 2/16/15.
 */
var foo = require('./foo');
console.log('initial something: ', foo.something);

//modify something
foo.something = 456;


//now load bar
var bas = require('./bar');

var foo2 = require('./foo2');
foo2.a();
foo2.b();