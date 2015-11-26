/**
 * Created by techmaster on 2/25/15.
 */
var request = require('request');
var fs = require('fs');
request('https://ununsplash.imgix.net/photo-1421284621639-884f4129b61d').pipe(fs.createWriteStream('coconut.png'));