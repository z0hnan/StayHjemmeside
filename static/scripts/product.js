var itemID = sessionStorage.getItem('itemID');
console.log('Item ID:', itemID);

document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to fetch data
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