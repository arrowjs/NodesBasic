/*
 Bài học cần nhớ: nếu một hàm nhận callback và nó là async.
 Nó tuyệt đối không nên gọi callback trực tiếp. Nó nên gọi qua
 process.nextTick
 hoặc setTimeOut
 */
function alwaysSync(arg, cb) {
    if (arg) {
        //gọi callback ở next tick của event loop
        process.nextTick(function(){
           cb('cached data');
        });
    } else {
        setTimeout(function(){
           cb('loaded data');
        }, 500 + Math.random() * 500);

    }
}
//Trong đoạn này, bar sẽ luôn được gọi trước, không quan tâm đến arg là true hay false
alwaysSync(false, function(data){
    foo(data);
});
bar();

function foo(data) {
    console.log('foo', data);
}

function bar() {
    console.log('bar');
}