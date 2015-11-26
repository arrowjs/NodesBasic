/**
 * Created by techmaster on 3/28/15.
 */
//http://ilikekillnerds.com/2015/02/a-guide-to-es6-classes/
"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }
}

class Child extends Person {
    constructor(name, age) {
        super(name, age);
    }

    // Override the someClass method above
    sayName() {
        // This will call someClass.sayName() triggering the old alert
        // Which will just display our name
        super.sayName();

        // This will trigger the new alert which has labels and our age
        console.log('Name:' + this.name + ' Age:' + this.age);
    }
}

var myChild = new Child('dwayne', 27);
myChild.sayName();