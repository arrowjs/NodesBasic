/**
 * Created by techmaster on 2/22/15.
 */
process.stdin.on('readable', function() {
    "use strict";
    var buf = process.stdin.read();
    if (buf !== null) {
        console.log('Got:');
        process.stdout.write(buf.toString());
    } else {
        console.log('Read complete');
    }
});