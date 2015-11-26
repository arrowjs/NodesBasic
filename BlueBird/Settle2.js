/**
 * Created by techmaster on 3/4/15.
 */
var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
//Mục tiêu ví dụ này là tải về 2 photo từ trang Unsplash, ngoài ra có 2 photo không tồn tại
console.time('download');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'},
    {link: 'https://techmaster.vn/photo.jpg',
        name: 'error.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1423439793616-f2aa4356b37e?q=75&fm=jpg&s=3b42f9c018b2712544debf4d6a4998ff',
        name: 'car.jpg'},
    {link: 'https://techmaster.vn/photo2.jpg',
        name: 'error2.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce3340?q=75&fm=jpg&s=282e5978de17d6cd2280888d16f06f04',
        name: 'nightstar.jpg'}];

//Tham khảo code mẫu ở đây
//https://promise-nuggets.github.io/articles/07-wrapping-callback-functions.html

function getPhoto(photoLink){
    return new Promise(function(fulfill, reject) {
        request.get(photoLink.link)
            .on('error', function (err) {
                err.name = photoLink.name;
                reject(err);
            })
            .pipe(fs.createWriteStream(photoLink.name)
                .on('finish', function () {
                    fulfill(photoLink.name);
                }).on('error', function (err) {
                    //err.prototype.name = photoLink.name;
                    reject(err);
                })
        );
    });
}

promise.settle(photoLinks.map(function(photoLink) {

    return getPhoto(photoLink);
})).then(function(results) {  //Sau khi tất cả các tác vụ thanh cong
    console.log('Only when all downloads success, print this line');
}).catch(function(err){
    // console.log('Error:\n', err);
    console.log('Error:\n', err);

});

