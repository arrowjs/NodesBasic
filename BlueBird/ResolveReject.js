/**
 * Created by techmaster on 3/10/15.
 */
var Promise = require('bluebird');
var words = ['porn', 'gambling', 'study'];
//Promise.map(words, function(word){
Promise.map(words, function(word){
    switch (word) {
        case 'porn':
            return Promise.reject(new Error('sex word: '+ word));
        case 'gambling':
            throw(new Error('bad word: '+ word));

    }
   /* if (word !== 'study'){
        return Promise.reject(new Error('bad word: '+ word));
    } else {
        return Promise.resolve('hoc hanh');
    }*/
    //return Promise.resolve('hochanh');


}).then(function(result){
    console.log('cool', result);
}).error(function(err){
    console.log('error', err.message);
}).catch(function(err){
    console.log('catch', err.message);
});