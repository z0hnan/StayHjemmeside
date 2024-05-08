document.addEventListener('DOMContentLoaded', function() {
    // Get all links with class "link"
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
    // Do something with the variables
    console.log('Variable 1:', var1);
    var itemID = var1;
    
}

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
            const price = item[2];
            const img = item[3];
            const description = item[4];

            const titleElement = document.getElementById('titleElement');
            titleElement.textContent = title;
            const priceElement = document.getElementById('priceElement');
            priceElement.textContent = price;
            const imgElement = document.getElementById('imgElement');
            imgElement.style.backgroundImage ="url(" + img+")";
            const descriptionElement = document.getElementById('descriptionElement');
            descriptionElement.textContent = description;
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, handle error
        });
});