/**
 * Created by techmaster on 2/22/15.
 */
var fs = require('fs');
var ws = fs.createWriteStream('message.txt');
ws.write('Viết một cái gì đó\n');
ws.end('và kết thúc tại đây');

var readableStream = fs.createReadStream('message.txt');
readableStream.pipe(process.stdout);