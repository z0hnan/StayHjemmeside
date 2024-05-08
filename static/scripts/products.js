export var itemData = {
    itemID: null
};

document.addEventListener('DOMContentLoaded', function() {
    // Get all links with class ".grid-img"
    var links = document.querySelectorAll('.grid-img');

    // Loop through each link
    links.forEach(function(link) {
        // Attach a click event listener to each link
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the href attribute of the clicked link
            var href = this.getAttribute('href');

            // Extract variables from the href
            var urlParams = new URLSearchParams(href.split('?')[1]);
            var var1 = urlParams.get('var1');

            
            // Pass variables to the JavaScript file
            getItemid(var1);

        });
    });
});

function getItemid(var1) {
    itemData.itemID = var1;
    console.log('Item ID:', itemData.itemID);
    // Store itemID in sessionStorage
    sessionStorage.setItem('itemID', itemData.itemID);
    // Redirect to the item page
    window.location.href = '/product';
}