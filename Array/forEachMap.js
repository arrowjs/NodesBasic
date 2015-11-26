/**
 * Created by techmaster on 3/4/15.
 */
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

// Note elision, there is no member at 2 so it isn't visited
var arr = [2, 5, ,9];
arr.forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9


var result = arr.map(Math.sqrt);
result.forEach(logArrayElements);