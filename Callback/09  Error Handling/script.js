fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Failed to fetch data. Please try again later.';
        document.body.appendChild(errorMessage);
    });
