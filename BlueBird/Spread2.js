var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'}
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
                    fulfill(photoLink);  //trả về đối tượng photoLink chứ không phải promise
                    //lúc này promise đã fullfilled
                }).on('error', function (err) {
                    reject(err);
                })
        );
    });
}
//Like calling .then, but the fulfillment value or rejection reason must be an array,
//which is flattened to the formal parameters of the handlers.
/*
promise.resolve().then(function() {
    return [getPhoto(photoLinks[0]), getPhoto(photoLinks[1])];
}).spread(function(p1, p2){
    console.log(p1);
    console.log(p2);

});*/
/*
promise.resolve().then(function() {
    return [getPhoto(photoLinks[0]), getPhoto(photoLinks[1])];
}).then(function(ps){
    console.log(ps);  //Kết quả đúng nhưng chỉ trả về [ {}, {} ]
}); */

/*
promise.all(photoLinks.map(function(photoLink) {
    return getPhoto(photoLink);
})).then(function(results) {  //Sau khi tất cả các tác vụ thanh cong
    console.log(results);
}).catch(function(err){
    console.log('Error:\n', err.message);
});*/

/*
promise.all(photoLinks.map(function(photoLink) {
    return getPhoto(photoLink);
})).spread(function(p1, p2) {  //Sau khi tất cả các tác vụ thanh cong
    console.log(p1);
    console.log(p2);
}).catch(function(err){
    console.log('Error:\n', err.message);
});*/
photoLinks.map(function(item){
    getPhoto(item).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.log('Error:\n', err.message);
    });
});
