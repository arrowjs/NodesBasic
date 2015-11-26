/**
 * Created by techmaster on 2/15/15.
 */
//class definition
function someClass() {
    //properties go here
    this.someProperty = 'initial value';

    //instance method
    this.tinyFunc = function (inStr) { //Hàm dành riêng cho instance. này phải gọi từ instance tạo ra từ new constructor
        this.someProperty = inStr;
    };
}

//member method go here. Bắt buộc phải gọi từ instance của class
someClass.prototype.memberFunc = function () {
    "use strict";
    this.someProperty = 'modified value';
};


//class method
someClass.otherFunc = function() {
    //"use strict";
    this.someProperty = 'Hack';
}

//creation
var instance = new someClass();

console.log(instance.someProperty);
instance.memberFunc();
console.log(instance.someProperty);
someClass.otherFunc();  //Có thể gọi được

//instance.otherFunc(); //không thể gọi lệnh này new tạo đối tượng instance không thể nhìn thấy otherFuc()
console.log(someClass.someProperty);  //Hack

instance.tinyFunc('Cool');
console.log(instance.someProperty);   //Cool
console.log(someClass.someProperty);  //Hack

//someClass.tinyFunc(); không thể gọi được hàm này

var otherInstance = new someClass();
otherInstance.tinyFunc('Hot');
console.log(otherInstance.someProperty);