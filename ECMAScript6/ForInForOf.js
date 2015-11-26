/**
 * Created by techmaster on 3/28/15.
 */
var arr = [1, 2, 3];
for (var n of arr) {
    console.log(n);
}
var obj = {a:1, b:2, c:3};
for (var prop in obj) {
    console.log("o." + prop + " = " + obj[prop]);
}