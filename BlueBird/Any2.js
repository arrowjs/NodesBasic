var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
//Mục tiêu ví dụ này là tải về 2 photo từ trang Unsplash
console.time('download');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'},
    {link: 'https://techmaster.vn/photo3.jpg', //error photo
        name: 'error.jpg'}
];

function getPhoto(photoLink){
    return new Promise(function(fulfill, reject) {
        request.get(photoLink.link)
            .on('error', function (err) {
                err.photo = photoLink.link;
                reject(err);
            })
            .pipe(fs.createWriteStream(photoLink.name)
                .on('finish', function () {
                    fulfill(photoLink);
                }).on('error', function (err) {
                    reject(err);
                })
        );
    });
}
//

promise.any(photoLinks.map(function(photoLink) {
    return getPhoto(photoLink);
})).then(function(result) {
    console.log(result);
}).catch(function(err){
    console.log('Error at: ' + err.photo + '\nReason: '+ err.message);
});