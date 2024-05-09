export var itemData = {
    itemID: null
};

document.addEventListener('DOMContentLoaded', function () {
    // Get all links with class ".grid-img"
    var links = document.querySelectorAll('.grid-img');

    // Loop through each link
    links.forEach(function (link) {
        // Attach a click event listener to each link
        link.addEventListener('click', function (event) {
            // Prevent the default link behavior because we just want to get the href attribute
            event.preventDefault();

            // Get the href attribute of the clicked link (e.g. "/product?var1=1")
            var href = this.getAttribute('href');

            // Extract variables from the href
            var urlParams = new URLSearchParams(href.split('?')[1]);
            var var1 = urlParams.get('var1');

            // Pass variables to the JavaScript file using the getItemid function
            getItemid(var1);
        });
    });
});

function getItemid(var1) {
    itemData.itemID = var1;
    console.log('Item ID:', itemData.itemID);
    // Store itemID in sessionStorage so that it can be accessed in product.js
    sessionStorage.setItem('itemID', itemData.itemID);
    // Redirect to the item page with the itemID
    window.location.href = '/product';
}