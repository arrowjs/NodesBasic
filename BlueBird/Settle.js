/**
 * Created by techmaster on 3/8/15.
 */
/**
 * Created by techmaster on 3/4/15.
 */
var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
//Mục tiêu ví dụ này là tải về 2 photo từ trang Unsplash
console.time('download');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://techmaster.vn/photo.jpg',
        name: 'error.jpg'}, //error 1
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'},
    {link: 'https://techmaster.vn/photo3.jpg', //error 2
        name: 'error.jpg'}
    ];

function getPhoto(photoLink){
    return new Promise(function(fulfill, reject) {
        request.get(photoLink.link)
            .on('error', function (err) {
                reject(err);
            })
            .pipe(fs.createWriteStream(photoLink.name)
                .on('finish', function () {
                    fulfill(photoLink.name);
                }).on('error', function (err) {
                    reject(err);
                })
        );
    });
}

/*
Đoạn này sử dụng settle để trả về mảng kết quả. Mảng kết quả gồm các phân tử
thành công (fullfill) và/hoặc thất bại (reject)
Kiểm tra từng phần tử bằng isRejected hoặc isFullfilled
 */
promise.settle(photoLinks.map(function(photoLink) {
    return getPhoto(photoLink);
})).then(function(results) {
    for (var i=0; i<results.length; i++) {
        if (results[i].isRejected()) {  //Failed
            console.log(results[i].reason());
        } else {   //Success
            console.log(results[i].value());
        }
    }
});