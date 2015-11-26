var fs = require('fs');
fs.readFile("bad.json", function(err, val) {
    if(err) {
        console.error("unable to read file");
    } else {
        try {
            var parse = JSON.parse(val);
            console.log(parse);
        } catch(e) {
            console.error("invalid json in file");
        }
    }
});