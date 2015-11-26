/**
 * Hướng dẫn viết callback sang dạng promise. chống lại việc lồng nhau
 */
var mailer = require('nodemailer');
var promise = require('bluebird');
var fs = require('fs');
var readFileAsync = promise.promisify(fs.readFile);
var transporter = mailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'support@techmaster.vn',
        pass: 'aikido2015-'
    },
    mailer_from: "Techmaster <support@techmaster.vn>",
    mailer_to: "cuong@techmaster.vn"
});

function sendMail(mailOptions){
    return new Promise(function(fulfill, reject) {
        transporter.sendMail(mailOptions, function(err, info){
            if (err !== null){
                reject(err);
            } else {
                fulfill(info);
            }
        });
    });
}
console.time('benchmark');
/*
readFileAsync('mailTemplate.html').then(function(mailContent){
    var mailOptions = {
        to: 'robin@techmaster.vn',
        from: 'cuong@techmaster.vn',
        subject: 'BlueBird Promise',
        html: mailContent
    };
    sendMail(mailOptions).then(function(result){
        console.log(result);
        console.timeEnd('benchmark');
    }).catch(function(err){
        console.log('Error: ', err.message);
        console.timeEnd('benchmark');
    });

}).catch(function(fileErr){
    console.log('File Error: ', fileErr.message);
});*/

readFileAsync('mailTemplate.html').then(function(mailContent){
    var mailOptions = {
        to: 'robin@techmaster.vn',
        from: 'cuong@techmaster.vn',
        subject: 'BlueBird Promise',
        html: mailContent
    };
    return sendMail(mailOptions);
}).then(function(result){
        console.log(result);
        console.timeEnd('benchmark');
}).catch(function(err){
        console.log('Error: ', err.message);
        console.timeEnd('benchmark');
});
/*
function prepareTemplate(templateName) {
    return new Promise(function(fulfill, reject){
        fs.readFile(templateName, function(err, data){
            if (err === null) {
                var mailOptions = {
                    to: 'robin@techmaster.vn',
                    from: 'cuong@techmaster.vn',
                    subject: 'BlueBird Promise',
                    html: data
                };
                fulfill(mailOptions);
            } else {
                reject(err);
            }
        });
    });
}

prepareTemplate('mailTemplate.html').then(function(mailOptions){
    return sendMail(mailOptions);
}).then(function(result){
    console.log(result);
    console.timeEnd('benchmark');
}).catch(function(err){
    console.log('Error: ', err.message);
    console.timeEnd('benchmark');
});*/
