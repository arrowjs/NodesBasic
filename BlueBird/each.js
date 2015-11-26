var fs = require('fs');
var Promise = require("bluebird");
var request = require('request');
var photoLinks = [{link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
    name: 'dog.jpg'},
    {link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
        name: 'house.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1423439793616-f2aa4356b37e?q=75&fm=jpg&s=3b42f9c018b2712544debf4d6a4998ff',
        name: 'car.jpg'},
    {link: 'https://techmaster.vn',
        name: 'bad.jpg'},
    {link: 'https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce3340?q=75&fm=jpg&s=282e5978de17d6cd2280888d16f06f04',
        name: 'nightstar.jpg'}

];
function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

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
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}
console.time("getPhoto");
Promise.each(photoLinks, function(item){
    return getPhoto(item).then(function(result) {
        now(result);  //In ra thời điểm và kết quả khi từng tác vụ thành công. Thứ tự sẽ khác với thứ tự các phần tử mảng
        return result;
    }).catch(function(err){
        console.log('error: ', err.message);
    });
}).then(function(finalResult){
    console.timeEnd("getPhoto");
});
console.log('Done');
