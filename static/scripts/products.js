document.addEventListener('DOMContentLoaded', function() {
    // Make a GET request to fetch data
    fetch('/get_data_itemtype')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            const itemlist = data[itemID - 1];
            const title = item[1];
            const price = item[2];

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