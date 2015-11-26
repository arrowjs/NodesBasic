/**
 * Created by techmaster on 1/11/15.
 */
"use strict";
function Circle(x, y, r) {
    function r_squared() {
        return Math.pow(r, 2);
    }
    function area() {
        return Math.PI * r_squared();
    }

    return {
        area: area
    };
}
//module.exports.area = area;
module.exports = Circle;