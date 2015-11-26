/**
 * Created by techmaster on 2/25/15.
 */
var options = {
    uri : 'http://posttestserver.com/post.php',
    method : 'POST',
    form: {city: 'Hanoi', population: 500000, jack: 'Nguyen Van Thanh'}
};
var rp = require('request-promise');
rp(options)
  //  .then(console.dir)
    .then(function(response){
        console.log(response);
    }
).catch(console.error);