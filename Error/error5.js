/**
 * Created by techmaster on 2/16/15.
 */
function getConnection(callback) {
    "use strict";
    var connection;
    try {
        throw new Error('connection failed');
        //All line under throw never be reached
        callback(null, connection);
    } catch (error) {
        //notify call back error
        callback(error, null);
    }
}

getConnection(function(error, connection) {
        "use strict";
        if (error) {
            console.log('Error: ', error.message);
        }  else {
            console.log('Connection succeed:', connection);
        }
    }
);