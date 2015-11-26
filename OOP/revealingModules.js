/**
 * Created by techmaster on 2/15/15.
 */
function printableMessage() {
    "use strict";
    var message = 'hello';
    function setMessage(newMessage) {
        if (!newMessage) { throw new Error('cannot set empty message'); }
        message = newMessage;
    }
    function getMessage() {
        return message;
    }

    function printMessage() {
        console.log(message);
    }
    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };
}
//Pattern
var awesome1 = printableMessage();
awesome1.printMessage();

var awesome2 = printableMessage();
awesome2.setMessage('Hi World');
awesome2.printMessage();

awesome1.printMessage();

console.log(awesome1.message); //Cannot access to private variable inside awesome1