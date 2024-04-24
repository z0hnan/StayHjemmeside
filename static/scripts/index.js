document.addEventListener('DOMContentLoaded', function() {
    // Make a GET request to fetch data
    fetch('/get_data')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log retrieved data
            // Optionally, update UI or perform other actions with the data
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, handle error
        });
});