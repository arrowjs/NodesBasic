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

function Bird(name) {
    "use strict";
    Animal.call(this, name);
}


Bird.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Bird,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Bird.prototype.fly = function(destination) {
    "use strict";
    console.log(this.name, 'is flying to', destination);
};

var bird = new Bird('Falcon');
bird.walk('Ecopark');
bird.fly('Washington');

console.log('Animal.prototype = ', Animal.prototype);
console.log('Bird.prototype = ', Bird.prototype);
