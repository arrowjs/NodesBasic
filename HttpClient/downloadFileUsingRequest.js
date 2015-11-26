var fs = require('fs');
var request = require('request');

console.time('download');
request.get('https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050')
    .on('error', function(err) {
        console.log('Download error', err);
    })
    .pipe(fs.createWriteStream('dog.jpg')
        .on('finish', function(){
            console.timeEnd('download');
            console.log('Done write to file');
        }).on('error', function(err){
            console.log('Error write to file: ', err);
        })
    );