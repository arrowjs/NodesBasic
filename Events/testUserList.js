/**
 * Created by techmaster on 1/13/15.
 */
var UserList = require("./userlist");
var users = new UserList();
//Hook function PHP
//Call back function
users.on("saved-user", function (user) {
    console.log("saved: " + user.name + " (" + user.id + ")");
});
users.on("saved-user", function (user) {
    console.log("Complete: " + user.name + " (" + user.id + ")");
});

users.save({ name: "Jane Doe", occupation: "manager" });
users.save({ name: "John Jacob", occupation: "developer" });

console.log(users.all());