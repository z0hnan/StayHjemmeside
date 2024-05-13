var cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `<span>${item.name}</span> <span>$${item.price}</span>`;
        cartList.appendChild(li);
    });
}

// Call the function to display cart items
displayCartItems();