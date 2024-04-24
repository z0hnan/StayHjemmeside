const itemID = 1;

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

document.addEventListener('DOMContentLoaded', function() {
    // Make a GET request to fetch data
    fetch('/get_data_item')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            const item = data[itemID - 1];
            const title = item[1];
            const description = item[2];
            const price = item[3];

            const titleElement = document.getElementById('titleElement');
            titleElement.textContent = title;
            const priceElement = document.getElementById('priceElement');
            priceElement.textContent = price;
            const descriptionElement = document.getElementById('descriptionElement');
            descriptionElement.textContent = description;
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, handle error
        });
});