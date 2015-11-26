/**
 * Created by techmaster on 2/21/15.
 */
function Animal(name) {
    "use strict";
    this.name = name;
}

Animal.prototype.walk = function(destination) {
    "use strict";
    console.log(this.name, 'is walking to', destination);
};

var animal = new Animal('elephant');
animal.run = function(destination) {
    "use strict";
    console.log(this.name, 'is running to', destination);
};
//Kiểm tra walk có phải là method của đối tượng animal. Nếu không thì kiểm tra animal.__proto__.walk
//nếu có thì chạy animal.__proto__.walk
animal.walk('Melbourne');

//Kiểm tra run có phải là method của đối tượng animal. Nếu đúng thì chạy luôn
animal.run('Sydney');

console.log(Animal.prototype);
console.log(animal.__proto__);

function Bird(name) {
    "use strict";
    Animal.call(this, name);
}
Bird.prototype.__proto__= Animal.prototype;
Bird.prototype.fly = function(destination) {
    "use strict";
    console.log(this.name, 'is flying to', destination);
};

var bird = new Bird('sparrow');

bird.walk('Sydney');
bird.fly('Vietnam');

console.log('Animal.prototype = ', Animal.prototype);
console.log('Bird.prototype = ', Bird.prototype);


//animal.fly('Mexico');
