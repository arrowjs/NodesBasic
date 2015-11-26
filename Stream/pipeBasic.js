/**
 * Created by techmaster on 2/22/15.
 */
var fs = require('fs');

var readableStream = fs.createReadStream('./cool.txt');

readableStream.pipe(process.stdout);