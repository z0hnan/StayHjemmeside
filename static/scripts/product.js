var itemID = sessionStorage.getItem('itemID');
console.log('Item ID:', itemID);

document.addEventListener('DOMContentLoaded', function () {
    // Laver en GET request for at hente data
    fetch('/get_data_item')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(itemID);
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
            imgElement.style.backgroundImage = "url(" + img + ")";
            const descriptionElement = document.getElementById('descriptionElement');
            descriptionElement.textContent = description;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('addToCart').addEventListener('click', addToCart);

//Denne funktion er til at tilføje et produkt til kurven
function addToCart() {
    // Henter kurven fra sessionStorage
    var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(itemID);
    console.log('Cart:', cart);

    // Gemmer kurven i sessionStorage igen
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Ændrer knappens tekst og farve når der trykkes på den
    document.getElementById('addToCart').textContent = "Tilføjet til kurven";
    document.getElementById('addToCart').style.backgroundColor = "white";
    document.getElementById('addToCart').style.color = "black";

    // Ændrer knappens tekst og farve tilbage efter 1,5 sekund
    setTimeout(function () {
        document.getElementById('addToCart').textContent = "Læg i kurv";
        document.getElementById('addToCart').style.backgroundColor = "rgb(70, 105, 42)";
        document.getElementById('addToCart').style.color = "white";
    }, 1500);
}