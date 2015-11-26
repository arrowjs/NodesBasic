/**
 * Created by techmaster on 2/21/15.
 */
var inherits = require('util').inherits;

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
//Bird kề thừa Animal
inherits(Bird, Animal);

Bird.prototype.fly = function(destination) {
    "use strict";
    console.log(this.name, 'is flying to', destination);
};

var bird = new Bird('sparrow');

bird.walk('Sydney');
bird.fly('Vietnam');

console.log('Animal.prototype = ', Animal.prototype);
console.log('Bird.prototype = ', Bird.prototype);

animal.walk('Bangkok');
