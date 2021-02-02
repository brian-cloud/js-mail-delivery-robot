/* we start by populating the tables */
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>value</th></tr>\n";
        var i = 0;
        /* we can advance a feature by creating a cap on maximum items*/
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";

        }
        /* if no items exist in the cart*/
        if (list == "<tr><th>Item</th><th>value</th><tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";

            /* now lets bind the elements t the html page */
            document.getElementById('list').innerHTML = list;
    
        } else{
            alert('Cannot save shopping list as your browser does not support html5')
        }
    }
}