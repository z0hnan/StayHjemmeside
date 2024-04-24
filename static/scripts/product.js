

function AddToCart(productId, productName, productPrice) {
    alert("Product added to cart");
        // Get the product details
        var productId;
        var productName;
        var productPrice;

        // Create a cart item object
        var cartItem = {
            id: productId,
            name: productName,
            price: productPrice
        };

        // Add the cart item to the cart
        addToCart(cartItem);

        // Function to add the cart item to the cart
        function addToCart(item) {
            // Add the item to the cart
            // Implement your logic here, such as updating the cart in local storage or making an API request
            console.log("Item added to cart:", item);
        }
}

$(document).ready(
    function() {
    var itemId = 1;
    $.ajax({
        url: '/get_item_title?id=' + itemId,
        type: 'GET',
        success: function(response) {
            $('#item-title').text(response.title);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching item title:', error);
        }
    });
});