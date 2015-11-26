//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

/*
 The solution to this puzzle is that myFunc has become a closure.
 A closure is a special kind of object that combines two things: a function, and the environment in which
 that function was created. The environment consists of any local variables that were in-scope at the time
 that the closure was created. In this case, myFunc is a closure that incorporates both the displayName
 function and the "Mozilla" string that existed when the closure was created.

 1- Closures have access to the outer function’s variable even after the outer function returns:
 One of the most important and ticklish features with closures is that the inner function still

 2- Closures store references to the outer function’s variables

 3-
 http://javascriptissexy.com/understand-javascript-closures-with-ease/

 A closure lets you associate some data (the environment) with a function that operates on that data.
 This has obvious parallels to object oriented programming, where objects allow us to associate some
 data (the object's properties) with one or more methods.
 */