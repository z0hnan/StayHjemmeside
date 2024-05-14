var cart = JSON.parse(sessionStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to fetch data
    fetch('/get_data_item')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Function to display cart items
            function displayCartItems() {
                const cartList = document.getElementById('cart-list');
                cartList.innerHTML = '';
                cart.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add('cart-item');
                    const itemFromDatabase = data[item - 1];
                    li.innerHTML = `<span>${itemFromDatabase[1]}</span> <span>${itemFromDatabase[2]} kr.</span>`;
                    cartList.appendChild(li);
                });
            }
            displayCartItems();

            // Tilføjer en eventlistener til knappen "tøm kurv"
            document.getElementById('clear-btn').addEventListener('click', emptyCart);
            function emptyCart() {
                cart = [];
                sessionStorage.setItem('cart', JSON.stringify(cart));
                displayCartItems();
                calculateTotal();
            }

            // Tilføjer den funktion der finder total prisen og viser den på siden
            function calculateTotal() {
                var total = 0;
                cart.forEach(item => {
                    const itemFromDatabase = data[item - 1];
                    total += parseFloat(itemFromDatabase[2]);
                });
                var totalRounded = Math.round(total*100)/100;
                document.getElementById('total').textContent = totalRounded + ' kr.';
            }
            calculateTotal();
        })
        .catch(error => {
            console.error('Error:', error);
        });
});