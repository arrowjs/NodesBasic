/**
 * Created by techmaster on 2/23/15.
 */
function loadItem(id, callback) {
    "use strict";
    setTimeout(function(){
        callback(null, {id: id});
    }, 500);
}

var loadedItems = [];
function itemsLoaded() {
    "use strict";
    console.log('Do something with: ', loadedItems);

}

function itemLoaded(err, item) {
    "use strict";
    loadedItems.push(item);
    if (loadedItems.length === 2) {
        itemsLoaded();
    }
}

loadItem(1, itemLoaded());
loadItem(2, itemLoaded());

