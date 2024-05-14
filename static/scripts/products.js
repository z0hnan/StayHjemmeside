var itemData = {
    itemID: null
};

document.addEventListener('DOMContentLoaded', function () {
    // Her tager den alle links med classen "grid-img"
    var links = document.querySelectorAll('.grid-img');

    // For hver link i links variablen gør den følgende
    links.forEach(function (link) {
        // Tilføjer en eventlistener til hvert link
        link.addEventListener('click', function (event) {
            // Forhindrer at linksne virker som de normalt ville da det ville sende brugeren til en ny side uden de skal det
            event.preventDefault();

            // Henter href attributten fra linket der er blevet trykket på og gemmer den i variablen href
            var href = this.getAttribute('href');

            // Henter variablen var1 fra URL'en og gemmer den i variablen var1
            var urlParams = new URLSearchParams(href.split('?')[1]);
            var var1 = urlParams.get('var1');

            // Kalder funktionen getItemid med variablen var1 som argument
            getItemid(var1);
        });
    });
});

function getItemid(var1) {
    itemData.itemID = var1;
    console.log('Item ID:', itemData.itemID);
    // Gemmer itemID i sessionStorage
    sessionStorage.setItem('itemID', itemData.itemID);
    // Sender brugeren til produkt siden
    window.location.href = '/product';
}