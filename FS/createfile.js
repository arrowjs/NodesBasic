/**
 * Created by techmaster on 2/18/15.
 */
var fs = require('fs');
fs.writeFileSync('test.txt', 'Hello FS!');
console.log(fs.readFileSync('test.txt').toString());