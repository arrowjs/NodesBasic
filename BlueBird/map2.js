/**
 * Created by techmaster on 3/8/15.
 */
var fs = require('fs');
var promise = require("bluebird");
var request = require('request');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1423439793616-f2aa4356b37e?q=75&fm=jpg&s=3b42f9c018b2712544debf4d6a4998ff',
      name: 'car.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce3340?q=75&fm=jpg&s=282e5978de17d6cd2280888d16f06f04',
      name: 'nightstar.jpg'},
    {link: 'http://techmaster.vn/tech/img/logo.png',
        name: 'logo.png'}
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
                    fulfill(photoLink.name);
                }).on('error', function (err) {
                    reject(err);
                })
        );
    });
}

function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}
console.time("getPhoto");

/*promise.map(photoLinks, function(item){
  return getPhoto(item);
}, {concurrency: 1}).then(function(result){
    console.log(result);
    console.timeEnd("getPhoto");
}).catch(function(err){
    console.log(err);
});*/

promise.map(photoLinks, function(photoLink) {
    //return getPhoto(photoLink);
    return getPhoto(photoLink).then(function(result) {
        now(result);  //In ra từng kết quả của mỗi tác vụ
        return result;
    });
}).then(function(result) {  //Sau khi tất cả các tác vụ thanh cong
    console.log('done all: ', result);
    console.timeEnd("getPhoto");
}).catch(function(err){
    console.log('Error:\n', err.message);
});